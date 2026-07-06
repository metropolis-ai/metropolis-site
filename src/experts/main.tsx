import * as React from "react";
import { createRoot } from "react-dom/client";
import "../styles.css";
import { ExpertsApp } from "./app";

const el = document.getElementById("root");
if (!el) throw new Error("missing #root");
createRoot(el).render(
  <React.StrictMode>
    <ExpertsApp />
  </React.StrictMode>,
);
