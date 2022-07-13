import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ScrollToTop } from "./components/common";
import GlobalStyle from "./styles/GlobelStyle";

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/creative-coding">
      <GlobalStyle />
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
