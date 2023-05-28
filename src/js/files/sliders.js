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

const sliderHeadliners = new Swiper(".headliners__slider", {
  slidesPerView: "auto",
  freeMode: true,
  loop: true,
  speed: 6000,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: true,
  },
});
