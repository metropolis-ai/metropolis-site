import * as React from "react";
import { createRoot } from "react-dom/client";
import "../styles.css";
import { InvestorsApp } from "./app";

const el = document.getElementById("root");
if (!el) throw new Error("missing #root");
createRoot(el).render(
  <React.StrictMode>
    <InvestorsApp />
  </React.StrictMode>,
);
