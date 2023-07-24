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

const sliderMuisc = new Swiper(".music__slider", {
  grabCursor: true,
  slidesPerView: "auto",
  spaceBetween: 30,
  speed: 800,
  autoplay: {
    delay: 1000
  },
  breakpoints: {
    1540: {
      spaceBetween: 80,
      slidesPerView: 2
    },
    1365: {
      spaceBetween: 60,
      slidesPerView: 2
    },
    577: {
      slidesPerView: 2
    }
  }
});