import * as React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "../styles.css";
import { ExpertsApp } from "./app";

const el = document.getElementById("root");
if (!el) throw new Error("missing #root");

const app = (
  <React.StrictMode>
    <ExpertsApp />
  </React.StrictMode>
);

// `pnpm build` bakes real HTML into this page (scripts/prerender.mjs) so
// crawlers see the copy, so the built page must be HYDRATED — calling
// createRoot on a filled container would throw that markup away and repaint,
// which the reader sees as a flash. `pnpm dev` serves the empty shell, where
// createRoot is the correct call.
if (el.firstChild) hydrateRoot(el, app);
else createRoot(el).render(app);
