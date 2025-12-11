import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import axios from "axios";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}

// Set axios base URL for API requests during development.
// Uses VITE_API_URL if provided, otherwise defaults to http://localhost:3000 in dev.
axios.defaults.baseURL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? "http://localhost:3000" : "");

createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </ClerkProvider>
);
