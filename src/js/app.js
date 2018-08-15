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

$('#selected-vacancie').on('change',function(){
  if( $(this).val()==="Accounting/Finance"){
    $(".selected-accounting-finance").show();
    $(".selected-administrative").hide();
    $(".selected-architecture").hide();
    $(".selected-business-development").hide();
    $(".selected-engineering").hide();
    $(".selected-commercial").hide();
    $(".selected-sales").hide();

  } else if ($(this).val()==="Administrative") {
    $(".selected-administrative").show();
    $(".selected-accounting-finance").hide();
    $(".selected-architecture").hide();
    $(".selected-business-development").hide();
    $(".selected-engineering").hide();
    $(".selected-commercial").hide();
    $(".selected-sales").hide();

  } else if ($(this).val()==="Architecture") {
    $(".selected-architecture").show();
    $(".selected-accounting-finance").hide();
    $(".selected-administrative").hide();
    $(".selected-business-development").hide();
    $(".selected-engineering").hide();
    $(".selected-commercial").hide();
    $(".selected-sales").hide();

  } else if ($(this).val()==="Business Development") {
    $(".selected-business-development").show();
    $(".selected-accounting-finance").hide();
    $(".selected-administrative").hide();
    $(".selected-architecture").hide();
    $(".selected-engineering").hide();
    $(".selected-commercial").hide();
    $(".selected-sales").hide();

  } else if ($(this).val()==="Engineering") {
    $(".selected-engineering").show();
    $(".selected-accounting-finance").hide();
    $(".selected-administrative").hide();
    $(".selected-architecture").hide();
    $(".selected-business-development").hide();
    $(".selected-commercial").hide();
    $(".selected-sales").hide();

  } else if ($(this).val()==="Commercial") {
    $(".selected-commercial").show();
    $(".selected-accounting-finance").hide();
    $(".selected-administrative").hide();
    $(".selected-architecture").hide();
    $(".selected-business-development").hide();
    $(".selected-engineering").hide();
    $(".selected-sales").hide();

  } else if ($(this).val()==="Sales") {
    $(".selected-sales").show();
    $(".selected-accounting-finance").hide();
    $(".selected-administrative").hide();
    $(".selected-architecture").hide();
    $(".selected-business-development").hide();
    $(".selected-engineering").hide();
    $(".selected-commercial").hide();

  }
});
