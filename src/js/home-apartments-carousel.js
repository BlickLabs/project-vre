var homeApartmentsCarousel = $('.home-apartments-carousel');

homeApartmentsCarousel.owlCarousel ({
  loop: true,
  nav: true,
  dots: true,
  navText: ['<img class="home-apartments-carousel-navigation" src="/img/icons/icon-nav-left.png" />', '<img class="home-apartments-carousel-navigation" src="/img/icons/icon-nav-right.png" />'],
  margin: 0,
  autoWidth: true,
  center: true,
  responsive:{
    0:{
      items:1
    },
    700:{
      items: 1
    },
    880: {
      items: 1
    },
    1000:{
      items:1
    }
  }
});

homeApartmentsCarousel.each(function(index) {
  $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='home-apartments-carousel-controls'></div>");
});