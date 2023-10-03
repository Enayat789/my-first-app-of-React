// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Header from "./HeaderComponent/Header";
import Hero from "./heroComponent/Hero";
import Footer from "./footerComponent/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <Hero />
    <Footer />
  </>
);

reportWebVitals();
