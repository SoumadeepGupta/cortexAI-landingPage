import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "./components/shared/ErrorBoundary";
import { LandingPage } from "./pages/LandingPage";
import "./styles/index.css";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root element #root not found");

createRoot(rootEl).render(
  <StrictMode>
    <ErrorBoundary>
      <LandingPage />
    </ErrorBoundary>
  </StrictMode>,
);
