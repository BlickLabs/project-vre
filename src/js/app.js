$(function(){
  $(".nav-icon-phone").click(function(){
    $(".nav-icon-info-mobile-phone").fadeToggle(0);
  });

  $(".nav-icon-phone-mobile").click(function(){
    $(".nav-icon-info-mobile-hamburger-phone").fadeToggle(0);
  });


  $(document).on("click", function(e){
    var $target = $(e.target);
    if(!$target.is(".nav-icon-phone") && !$target.is(".nav-icon-info-mobile-phone")){
        $(".nav-icon-info-mobile-phone").fadeOut(0);
    }

    if(!$target.is(".nav-icon-phone-mobile") && !$target.is(".nav-icon-info-mobile-hamburger-phone")){
        $(".nav-icon-info-mobile-hamburger-phone").fadeOut(0);
    }
  });
});