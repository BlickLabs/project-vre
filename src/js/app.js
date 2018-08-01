$(function(){
  $(".nav-icon-phone").click(function(){
    $(".nav-icon-info-mobile-phone").fadeToggle(0);
  });

  $(".nav-icon-whatsapp").click(function(){
    $(".nav-icon-info-mobile-whats").fadeToggle(0);
  });

  $(".nav-icon-phone-mobile").click(function(){
    $(".nav-icon-info-mobile-hamburger-phone").fadeToggle(0);
  });

  $(".nav-icon-whatsapp-mobile").click(function(){
    $(".nav-icon-info-mobile-hamburger-whats").fadeToggle(0);
  });


  $(document).on("click", function(e){
    var $target = $(e.target);
    if(!$target.is(".nav-icon-phone") && !$target.is(".nav-icon-info-mobile-phone")){
        $(".nav-icon-info-mobile-phone").fadeOut(0);
    }

    if(!$target.is(".nav-icon-whatsapp") && !$target.is(".nav-icon-info-mobile-whats")){
        $(".nav-icon-info-mobile-whats").fadeOut(0);
    }

    if(!$target.is(".nav-icon-phone-mobile") && !$target.is(".nav-icon-info-mobile-hamburger-phone")){
        $(".nav-icon-info-mobile-hamburger-phone").fadeOut(0);
    }

    if(!$target.is(".nav-icon-whatsapp-mobile") && !$target.is(".nav-icon-info-mobile-hamburger-whats")){
        $(".nav-icon-info-mobile-hamburger-whats").fadeOut(0);
    }
  });
});