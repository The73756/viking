import Swiper, { FreeMode, Navigation, Autoplay } from "swiper";

Swiper.use([Navigation, Autoplay, FreeMode]);

const sliderProgram = new Swiper(".program__slider", {
  simulateTouch: false,
  spaceBetween: 30,
  navigation: {
    nextEl: ".program__arrow--next",
    prevEl: ".program__arrow--prev",
  },
});
