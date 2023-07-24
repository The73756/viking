import marquee from "vanilla-marquee";

(() => {
  const items = document.querySelectorAll(".marquee-wrapper");
  if (!items.length) return;

  items.forEach((item) => {
    const direction = item.dataset.direction || "left";
    
    new marquee(item, {
      pauseOnHover: true,
      gap: 0,
      speed: 30,
      duplicated: true,
      delayBeforeStart: 0,
      startVisible: true,
      direction
    });
  });
})();
