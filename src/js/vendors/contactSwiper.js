import SwiperCore from "swiper/core";
import Swiper from "swiper/bundle";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/scss/autoplay";

const swiper = new Swiper('.contactSwiper', {
    slidesPerView: 1,
    direction: "horizontal",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1100: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
}}
)