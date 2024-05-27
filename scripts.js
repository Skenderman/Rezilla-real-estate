document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector(".scrolling-wrapper");

  scrollContainer.addEventListener("wheel", (event) => {
    event.preventDefault(); // Prevent default vertical scroll behavior
    scrollContainer.scrollLeft += event.deltaY; // Scroll horizontally instead
  });
});
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-bar-mobile");
const rezilaIcon = document.querySelector("#mobile-icon-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  rezilaIcon.classList.toggle("active");
});
