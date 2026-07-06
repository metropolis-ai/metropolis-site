import * as React from "react";
import { Button, cn } from "@polis/ui-kit";

/**
 * Contact form for a backend-less static site — the React port of the old
 * forms.js. Submissions POST to a Formspree endpoint that captures them
 * server-side and forwards to a private inbox, so NO contact email ever appears
 * in the public source. The destination lives inside Formspree; the site only
 * knows the opaque form id.
 */
const FORM_ENDPOINT = "https://formspree.io/f/xaqglbvg";

export interface ContactField {
  name: string;
  label: string;
  type?: "text" | "email";
  required?: boolean;
  /** Render as a multi-line textarea. */
  textarea?: boolean;
  /** Span the full width of a 2-column grid. */
  full?: boolean;
}

export interface ContactFormProps {
  /** Email subject line the submission is tagged with. */
  subject: string;
  fields: ContactField[];
  submitLabel?: string;
  /** Two-column field layout that stacks on small screens (default false). */
  twoColumn?: boolean;
  /** Styling for placement on a filled primary surface vs. a light card. */
  tone?: "default" | "onBrand";
  className?: string;
}

type Status = { message: string; kind: "idle" | "ok" | "error" };

export function ContactForm({
  subject,
  fields,
  submitLabel = "Submit",
  twoColumn = false,
  tone = "default",
  className,
}: ContactFormProps): React.JSX.Element {
  const [status, setStatus] = React.useState<Status>({ message: "", kind: "idle" });
  const [busy, setBusy] = React.useState(false);
  const onBrand = tone === "onBrand";

  const fieldClass = cn(
    "w-full rounded-md border px-3 py-2 text-base shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    onBrand
      ? "border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60"
      : "border-input bg-background text-foreground placeholder:text-muted-foreground",
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    // Tag which page the submission came from (mirrors the old forms.js).
    const source = window.location.pathname.replace(/^.*\//, "") || "index.html";
    setBusy(true);
    setStatus({ message: "", kind: "idle" });
    try {
      const r = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ _subject: subject, source, ...data }),
      });
      if (!r.ok) throw new Error("bad status");
      form.reset();
      setStatus({ message: "Thanks — we'll be in touch.", kind: "ok" });
    } catch {
      setStatus({
        message: "Something went wrong sending that — please try again shortly.",
        kind: "error",
      });
    } finally {
      setBusy(false);
    }
  }

  const statusColor =
    status.kind === "ok"
      ? onBrand
        ? "text-primary-foreground"
        : "text-emerald-600"
      : status.kind === "error"
        ? onBrand
          ? "text-primary-foreground"
          : "text-destructive"
        : "";

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "grid gap-3",
        twoColumn ? "sm:grid-cols-2" : "",
        className,
      )}
    >
      {fields.map((f) => {
        const span = !twoColumn || f.full ? "sm:col-span-2" : "";
        return f.textarea ? (
          <textarea
            key={f.name}
            name={f.name}
            required={f.required}
            aria-label={f.label}
            placeholder={f.label}
            rows={4}
            className={cn(fieldClass, "min-h-[92px] resize-y", span)}
          />
        ) : (
          <input
            key={f.name}
            name={f.name}
            type={f.type ?? "text"}
            required={f.required}
            aria-label={f.label}
            placeholder={f.label}
            className={cn(fieldClass, span)}
          />
        );
      })}
      <Button
        type="submit"
        disabled={busy}
        className={cn(
          twoColumn ? "sm:col-span-2" : "",
          onBrand
            ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            : "",
        )}
      >
        {busy ? "Sending…" : submitLabel}
      </Button>
      <div
        role="status"
        aria-live="polite"
        className={cn("min-h-[1.2em] text-sm", statusColor, "sm:col-span-2")}
      >
        {status.message}
      </div>
    </form>
  );
}
