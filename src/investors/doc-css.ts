/**
 * Read-only styling for the gated docs, rendered INSIDE the sandboxed iframe.
 *
 * This is ported verbatim from the hand-built investors.html `DOC_CSS`. The
 * site's own stylesheet does NOT reach inside the iframe (the kit renders
 * decrypted docs via `srcDoc` + `sandbox`), so all doc typography/overflow
 * handling must live here. Any doc-viewer typography fix goes in this string.
 */
export const DOC_CSS = `
  :root{--plane:#efe9dd;--surface:#fbfaf6;--card:#fff;--ink:#1c1a15;--ink2:#57503f;--muted:#8a8172;--hair:#e4ddcd;--hair2:#d6cdb8;--brand:#23324c;--brand2:#33507a;--accent:#a97b3d;--accentsoft:#f3e9d6}
  *{box-sizing:border-box}
  body{margin:0;background:var(--plane);color:var(--ink);font-family:system-ui,-apple-system,"Segoe UI",sans-serif;line-height:1.65}
  .wrap{max-width:820px;margin:0 auto;padding:40px 24px 72px}
  h1{font-family:Georgia,serif;font-size:clamp(1.7rem,4.5vw,2.4rem);line-height:1.12;margin:.2em 0 .3em}
  h2{font-family:Georgia,serif;font-size:1.32rem;margin:1.7em 0 .3em}
  h3{font-family:Georgia,serif;font-size:1.08rem;margin:1.3em 0 .2em}
  p,h1,h2,h3,h4,li,a,code{overflow-wrap:anywhere}
  p{margin:.7em 0;color:var(--ink2)} strong{color:var(--ink)}
  ul,ol{margin:.6em 0;padding-left:22px} li{margin:.35em 0;color:var(--ink2)}
  a{color:var(--brand2)}
  code{background:var(--surface);border:1px solid var(--hair);border-radius:5px;padding:.05em .4em;font-size:.9em}
  pre{background:var(--surface);border:1px solid var(--hair);border-radius:10px;padding:14px 16px;overflow-x:auto;-webkit-overflow-scrolling:touch}
  pre code{background:none;border:0;padding:0}
  blockquote{margin:1em 0;padding:.6em 1em;border-left:3px solid var(--accent);background:var(--card);border-radius:0 10px 10px 0;color:var(--ink2)}
  blockquote p{margin:.2em 0}
  hr{border:0;border-top:1px solid var(--hair);margin:2em 0}
  table{border-collapse:collapse;width:100%;margin:12px 0;font-size:.92rem;display:block;overflow-x:auto;-webkit-overflow-scrolling:touch}
  th,td{text-align:left;padding:8px 11px;border-bottom:1px solid var(--hair);vertical-align:top}
  th{font-size:.72rem;text-transform:uppercase;letter-spacing:.04em;color:var(--muted)}
  img{max-width:100%}
  @media(max-width:480px){.wrap{padding:28px 16px 56px}}
`;

/** Wrap already-rendered markdown HTML in a standalone doc with DOC_CSS. */
export function mdDoc(title: string, bodyHtml: string): string {
  const safeTitle = title.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c] ?? c);
  return (
    '<!doctype html><meta charset="utf-8"><title>' +
    safeTitle +
    "</title><style>" +
    DOC_CSS +
    '</style><div class="wrap">' +
    bodyHtml +
    "</div>"
  );
}
