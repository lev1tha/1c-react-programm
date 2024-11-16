import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function SecondPage() {
  return (
    <div className="swiper-slide">
      <div className="left_main_site">
        <div className="title">
          <h1>1C: Solutions that work for you!</h1>
        </div>
        <div className="suptitle">
          <p>
            We offer software that works for you, helping you achieve your goal.
            Trust the best - trust 1C.
          </p>
        </div>
        <div className="button_main">
          <Link to={"/service"}>See all service</Link>
          <img src="/assets/arrow.svg" alt="arrow for service" />
        </div>
      </div>

      <div className="right_main_site">
        <img src="/assets/inllustration.svg" alt="slide for main page" />
      </div>
    </div>
  );
}
