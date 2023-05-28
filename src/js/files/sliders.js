import Swiper from "swiper";
import { Navigation } from "swiper";

const swiper = new Swiper(".swiper", {
  modules: [Navigation],
  navigation: {
    nextEl: ".program__arrow--next",
    prevEl: ".program__arrow--prev",
  },
});
