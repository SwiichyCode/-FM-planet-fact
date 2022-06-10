import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Planets from "./components/Planets/Planet/Planet";
import GlobalStyle from "./styles/globalStyles";
import "./styles/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/:id" element={<Planets />} />
        <Route path="/:id/:params" element={<Planets />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
