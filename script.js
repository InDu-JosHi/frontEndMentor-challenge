// Hamburger
const hamburger = document.querySelector(".hamburger");
const closeHamburger = document.querySelector(".close-hamburger");
const nav = document.querySelector("nav");
const img12 = document.querySelector(".img12");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  nav.style.display = "block";
  hamburger.classList.toggle("active");
  hamburger.style.display = "none";
  closeHamburger.style.display = "block";
  img12.style.display = "none";
});
closeHamburger.addEventListener("click", () => {
  nav.style.display = "none";
  closeHamburger.classList.toggle("active");
  hamburger.style.display = "block";
  closeHamburger.style.display = "none";
  img12.style.display = "block";
});

// Initialize Swiper

var swiper = new Swiper(".mySwiper", {
  centeredSlides: false,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// Initialize Animation
AOS.init();
