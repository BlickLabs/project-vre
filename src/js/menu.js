var last_known_scroll_position = 0;
var ticking = false;

var setNav = document.querySelector('.nav');
// var navLogo = document.querySelector('.nav-logo-white');

//navbar-fixed-top
function doSomething(scroll_pos) {
  if (window.location.pathname === '/index.html' || window.location.pathname === '/' || window.location.pathname === '/project-vre/index.html' || window.location.pathname === '/project-vre/') {
    if (scroll_pos > 30) {
      setNav.classList.add('nav-scroll');
      $(".nav-logo-white").addClass('nav-logo-orange');
      $(".nav-icon-phone").addClass('nav-icon-phone-gray');
      $(".nav-icon-whatsapp").addClass('nav-icon-whatsapp-gray');
      $(".nav-option").addClass('nav-option-gray');
      $(".nav-hamburger-icon").addClass('nav-hamburger-icon-orange');

    } else {
      setNav.classList.remove('nav-scroll');
      $(".nav-logo-white").removeClass('nav-logo-orange');
      $(".nav-icon-phone").removeClass('nav-icon-phone-gray');
      $(".nav-icon-whatsapp").removeClass('nav-icon-whatsapp-gray');
      $(".nav-option").removeClass('nav-option-gray');
      $(".nav-hamburger-icon").removeClass('nav-hamburger-icon-orange');

    }
  }
}

doSomething();

window.addEventListener('scroll', function(e) {
  if (e.view) {
    last_known_scroll_position = e.view.pageYOffset;
  }
  else {
    last_known_scroll_position = window.scrollY;
  }
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false
    });
  }
  ticking = true;
});

function showMenu() {
  document.querySelector('#menuContainer').style.width = '85%';
  document.querySelector('#hamburgerMenu').style.display = 'none';
  document.querySelector('.if-hamburger-open').style.display = 'none';
  document.querySelector('.nav-icon-container').style.display = 'none';
}

function hideMenu() {
  document.querySelector('#menuContainer').style.width = '0%';
  document.querySelector('#hamburgerMenu').style.display = 'inline';
  document.querySelector('.if-hamburger-open').style.display = 'block';
  document.querySelector('.nav-icon-container').style.display = 'flex';
}

window.addEventListener('click', function(e) {
  if (!e.target.dataset.hasOwnProperty('attribute')) {
    hideMenu();
  }
});

/*Events of touchstart to mobile version*/

var showHamburger = document.querySelector('#hamburgerMenu');

showHamburger.addEventListener('touchstart', function(e) {
  e.preventDefault();
  showMenu();
});

var hideHamburger = document.querySelector('#hideHamburger');

hideHamburger.addEventListener('touchstart', function(e) {
  e.preventDefault();
  hideMenu();
});

/* Events of click to desktop version*/

showHamburger.addEventListener('click', function(e) {
  e.preventDefault();
  showMenu();
});

hideHamburger.addEventListener('click', function(e) {
  e.preventDefault();
  hideMenu();
});
