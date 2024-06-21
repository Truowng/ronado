const menuBtn = document.querySelector("#header .menu-button");
const closeBtn = document.querySelector(
  "#header .header-link-list .close-button"
);
const menu = document.querySelector("#header .header-link-list");

menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

const slideText = new Swiper("#slide-text .swiper", {
  direction: "horizontal",
  speed: 10000,
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 100,
  autoplay: {
    delay: 0,
  },
});

AOS.init();
