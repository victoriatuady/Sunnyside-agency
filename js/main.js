const hamburger = document.getElementById("hamburger");
const navlist = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  navlist.classList.toggle("show");
  hamburger.classList.toggle("opacity");
});
