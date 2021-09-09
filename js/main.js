new WOW().init();

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
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
