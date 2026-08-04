import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  ThemeProvider,
} from "@metropolis-ai/ui-kit";
import {
  GatedHub,
  useGatedHub,
} from "@metropolis-ai/marketing-site-kit";
import { metropolisBrand } from "../brand";
import { ContactForm } from "../components/contact-form";
import { MetropolisMark } from "../components/chrome";
import { createMetropolisGatedHubSource } from "./gated-hub-source";

/** The request-access aside beside the gate for invited private readers. */
function RequestAccessAside(): React.JSX.Element {
  return (
    <Card>
      <CardHeader>
        <div className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
          Private access
        </div>
        <CardTitle>Share your interest</CardTitle>
        <CardDescription>
          Potential investor or trusted mentor? Tell us a little about you and
          we’ll follow up—and share access if it is a fit.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ContactForm
          subject="Metropolis — private materials interest"
          submitLabel="Share interest"
          fields={[
            { name: "name", label: "Your name", required: true },
            { name: "email", label: "you@email.com", type: "email", required: true },
            { name: "firm", label: "Firm / organization (optional)" },
            { name: "about", label: "A little about you and your interest", textarea: true },
          ]}
        />
      </CardContent>
    </Card>
  );
}

export function InvestorsApp(): React.JSX.Element {
  // The source (decrypt/auth seam) must be stable across renders.
  const source = React.useMemo(() => createMetropolisGatedHubSource(), []);
  const controls = useGatedHub(source, {
    failureMessage: "Incorrect passphrase. Try again.",
  });
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
  const unlocked = controls.status === "unlocked";

  return (
    <ThemeProvider brand={metropolisBrand}>
      {!unlocked ? (
        <header className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
            <MetropolisMark />
            <a
              href="index.html"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              ← Home
            </a>
          </div>
        </header>
      ) : null}

      <div className={unlocked ? "" : "mx-auto w-full max-w-4xl px-6 py-4"}>
        <GatedHub
          {...controls}
          mobileNavOpen={mobileNavOpen}
          onMobileNavOpenChange={setMobileNavOpen}
          className={unlocked ? "h-[100dvh]" : undefined}
          brandMark={
            <span>
              metropolis <span className="text-muted-foreground">· private materials</span>
            </span>
          }
          gateAside={!unlocked ? <RequestAccessAside /> : undefined}
          copy={{
            eyebrow: "Private materials",
            title: "The Metropolis thesis",
            description:
              "Enter the access passphrase to read the private thesis and, as they are completed, deeper material on the capability, knowledge, operating, and evidence systems.",
            passphrasePlaceholder: "Access passphrase",
            unlockLabel: "Unlock",
            lockLabel: "Lock",
            note: "Everything is encrypted and decrypts in your browser only with the correct passphrase. These are working thesis materials, not a representation that a full financial model or portfolio already exists.",
            emptyTitle: "Select a document",
            emptyMessage: "Pick a document from the list to open it.",
            draftMessage: "Draft in progress — this reference is coming soon.",
          }}
        />
      </div>
    </ThemeProvider>
  );
}
