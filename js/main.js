new WOW().init();

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  center: true,
  dots: false,
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    700: {
      items: 1,
    },
    992: {
      items: 3,
    },
  },
});

const links = document.querySelectorAll(".nav-link");

links.forEach((element) => {
  element.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    const allli = this.parentNode.parentNode.children;
    console.log(allli);
    allli.forEach(function (el) {
      console.log("here", el.children[0]);
      el.children[0].classList.remove('active');
    });
    this.classList.add('active')
  });
});
