import marquee from "vanilla-marquee";

(() => {
  const items = document.querySelectorAll(".marquee-wrapper");
  console.log(items);
  if (!items.length) return;

  items.forEach((item) => {
    new marquee(item, {
      pauseOnHover: true,
      speed: 100,
      duplicated: true,
      delayBeforeStart: 0,
      startVisible: true,
    });
  });
})();
