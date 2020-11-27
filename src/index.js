import React from "react";
import ReactDOM from "react-dom";

import Navbar from "./Components/Navbar.jsx";
import Carousel from "./Components/Carousel.jsx";
import Content from "./Components/Content.jsx";
import Footer from "./Components/Footer.jsx";
import Flexboxes from "./Components/Flexboxes.jsx";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./index.css";

ReactDOM.render(
  <>
    <Navbar />
    <Carousel />
    <Flexboxes />
    <Content />
    <Footer />
  </>,
  document.getElementById("root")
);
