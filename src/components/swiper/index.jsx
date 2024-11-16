import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectFade,
  Navigation,
  Pagination as SwiperPagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper.css";
import { Autoplay } from "swiper/modules";

import FirstPage from "../sda/FirstPage";
import SecondPage from "../sda/SecondPage";
import ThirdPage from "../sda/ThirdPage";

const PaginationSwiper = () => {
  const slides = [<FirstPage />, <SecondPage />, <ThirdPage />];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="pagination-swiper">
      <Swiper
        modules={[EffectFade, Navigation, SwiperPagination, Autoplay]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        onSlideChange={handleSlideChange}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} ${
              index === activeIndex ? "active-bullet" : ""
            }"></span>`;
          },
        }}
        autoplay={{ delay: 2000 }} // Автопрокрутка с задержкой 2 секунды
        loop
        className="swiper-container"
      >
        {slides.map((SlideComponent, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="slide-content">{SlideComponent}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PaginationSwiper;
