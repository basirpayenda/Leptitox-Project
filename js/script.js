/************************************
            Navigation Bar
 ***********************************/
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

/************************************
            Subscribe Form
 ***********************************/
const newsletter_btn = document.querySelector(".newsletter-btn");
const newsletter_overlay = document.querySelector(".newsletter-overlay");
const newsltr_close = document.querySelector(".newsltr-close");

newsletter_btn.addEventListener("click", () => {
  newsletter_overlay.classList.toggle("active");
  newsletter_btn.classList.toggle("hide");
});

newsltr_close.addEventListener("click", function() {
  newsletter_overlay.classList.toggle("active");
  newsletter_btn.classList.toggle("hide");
});
/* 
setTimeout(function() {
  newsletter_btn.click();
}, 30 * 1000); */

/*******************************************
            Landing Page slide show
 *******************************************/

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});
