/*jshint esversion: 6 */

let navSlide = () => {
  let nav = document.getElementById("sidenav");
  let navlinks = document.querySelectorAll(".navbar-item");
  let burger = document.querySelector(".burgers");

  burger.addEventListener("click", e => {
    nav.classList.toggle("sidenav-active");
    nav.style.transition = "all 0.5s";

    e.currentTarget.classList.toggle("hamburger");

    navlinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 6 +
          0.3}s`;
      }
    });
  });
};

navSlide();
