import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./global.css";

// components
import Header from "./widgets/header/Header";
import Footer from "./widgets/footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="container">
        <Header />
        <App />
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
