import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));
const client = new QueryClient()
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <Router>
        <AnimatePresence>
          <App />
        </AnimatePresence>
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);
