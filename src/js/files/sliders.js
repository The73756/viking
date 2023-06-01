import Swiper, { FreeMode, Navigation, Autoplay } from "swiper";

Swiper.use([Navigation, Autoplay, FreeMode]);

const sliderOffer = new Swiper(".offer__slider", {
  simulateTouch: false,
  spaceBetween: 30,
  navigation: {
    nextEl: ".offer__arrow--next",
    prevEl: ".offer__arrow--prev",
  },
});
