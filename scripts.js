document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector(".scrolling-wrapper");

  scrollContainer.addEventListener("wheel", (event) => {
    event.preventDefault(); // Prevent default vertical scroll behavior
    scrollContainer.scrollLeft += event.deltaY; // Scroll horizontally instead
  });
});
