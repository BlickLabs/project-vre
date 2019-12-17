var homeBlogCarousel = $('.home-blog-carousel');

homeBlogCarousel.owlCarousel ({
  autoplay: true,
  autoplayTimeout: 3000,
  loop: true,
  nav: true,
  dots: true,
  navText: ['<div class="home-blog-carousel-navigation arrow-left"></div>', '<div class="home-blog-carousel-navigation arrow-right"></div>'],
  margin: 0,
  autoWidth: false,
  animateOut: 'fadeOut',
  mouseDrag: false,
  touchDrag: false,
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

homeBlogCarousel.each(function(index) {
  $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='home-blog-carousel-controls'></div>");
});