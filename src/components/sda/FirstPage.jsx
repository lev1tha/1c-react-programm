import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function FirstPage() {
  return (
    <div className="swiper-slide">
      <div className="left_main_site">
        <div className="title">
          <h1>The first choice of the successful!</h1>
        </div>
        <div className="suptitle">
          <p>
            Take the first step to success with the market leaders! We are your
            reliable partner on the way to prosperity.
          </p>
        </div>
        <div className="button_main">
          <Link to={"/service"}>See all service</Link>
          <img src="/assets/arrow.svg" alt="arrow for service" />
        </div>
      </div>
      <div className="right_main_site">
        <img src="/assets/main.svg" alt="slide for main page" />
      </div>
    </div>
  );
}
