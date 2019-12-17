(function() {
  var aboutWorkCarousel = $(".work-carousel");

  aboutWorkCarousel.owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    navText: [
      '<div class="work-carousel-navigation arrow-left"></div>',
      '<div class="work-carousel-navigation arrow-right"></div>'
    ],
    margin: 0,
    autoWidth: true,
    center: true,
    responsive: {
      0: {
        items: 1
      },
      700: {
        items: 1
      },
      880: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  aboutWorkCarousel.each(function(index) {
    $(this)
      .find(".owl-nav, .owl-dots")
      .wrapAll("<div class='work-carousel-controls'></div>");
  });
})();