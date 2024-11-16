import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function ThirdPage() {
  return (
    <div className="swiper-slide">
      <div className="left_main_site">
        <div className="title">
          <h1>Quick start for your business with 1C</h1>
        </div>
        <div className="suptitle">
          <p>
            Our 1C software will help you get started quickly and hassle-free.
            Quick start, big results!
          </p>
        </div>
        <div className="button_main">
          <Link to={"/service"}>See all service</Link>
          <img src="/assets/arrow.svg" alt="arrow for service" />
        </div>
      </div>
      <div className="right_main_site">
        <img src="/assets/illustration2.svg" alt="slide for main page" />
      </div>
    </div>
  );
}
