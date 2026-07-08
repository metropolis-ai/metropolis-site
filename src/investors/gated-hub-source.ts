import { marked } from "marked";
import type {
  GatedHubDoc,
  GatedHubNode,
  GatedHubSource,
} from "@polis/marketing-site-kit";
import { mdDoc } from "./doc-css";

/**
 * The metropolis investor hub's decrypt/auth seam — the client-side AES-GCM
 * gating from the hand-built investors.html, ported UNCHANGED behind the kit's
 * pluggable `GatedHubSource`. Nothing about the encryption weakens: the same
 * `docs.enc.js` bundle (produced by build.cjs, decrypted only in the browser with
 * the correct passphrase) is loaded here, and this is the ONLY place the
 * passphrase or plaintext ever exists.
 *
 *   - `unlock(passphrase)` derives the key (PBKDF2-SHA256) and decrypts the `nav`
 *     blob. A wrong passphrase fails AES-GCM authentication → rejects → the hook
 *     keeps the gate locked and shows the error. This is the gate.
 *   - `loadDoc(node)` decrypts one document on demand and returns it as trusted
 *     HTML for the kit's SANDBOXED iframe (markdown docs are rendered with
 *     `marked` and wrapped in DOC_CSS; html docs pass through).
 *
 * The encrypted payloads live in `window.__ENC`, set by /docs.enc.js (a plain
 * script loaded ahead of this module in investors.html).
 */

interface EncPayload {
  iter?: number;
  salt: string;
  iv: string;
  ct: string;
}

/** The nav node shape build.cjs encrypts — GatedHubNode plus a doc format tag. */
interface NavNode extends GatedHubNode {
  fmt?: "md" | "html";
  children?: NavNode[];
}

declare global {
  interface Window {
    __ENC?: Record<string, EncPayload>;
  }
}

function b64ToBytes(b: string): Uint8Array<ArrayBuffer> {
  const bin = atob(b);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

export function createMetropolisGatedHubSource(): GatedHubSource {
  let pass: string | null = null;
  const cache: Record<string, string> = {};

  async function decrypt(id: string): Promise<string> {
    if (cache[id] !== undefined) return cache[id];
    const enc = (window.__ENC ?? {})[id];
    if (!enc) throw new Error("missing " + id);
    const salt = b64ToBytes(enc.salt);
    const iv = b64ToBytes(enc.iv);
    const ct = b64ToBytes(enc.ct);
    const baseKey = await crypto.subtle.importKey(
      "raw",
      new TextEncoder().encode(pass ?? ""),
      "PBKDF2",
      false,
      ["deriveKey"],
    );
    const key = await crypto.subtle.deriveKey(
      { name: "PBKDF2", salt, iterations: enc.iter ?? 150000, hash: "SHA-256" },
      baseKey,
      { name: "AES-GCM", length: 256 },
      false,
      ["decrypt"],
    );
    const plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, ct);
    const text = new TextDecoder().decode(plain);
    cache[id] = text;
    return text;
  }

  return {
    async unlock(passphrase: string): Promise<GatedHubNode[]> {
      pass = passphrase;
      // Decrypting the nav blob both validates the passphrase (AES-GCM auth) and
      // yields the document tree. A wrong passphrase throws here.
      const nav = JSON.parse(await decrypt("nav")) as NavNode[];
      return nav;
    },

    async loadDoc(node: GatedHubNode): Promise<GatedHubDoc> {
      const n = node as NavNode;
      const content = await decrypt(n.id);
      const html =
        n.fmt === "md" ? mdDoc(n.title, marked.parse(content) as string) : content;
      return { title: n.title, html };
    },
  };
}
