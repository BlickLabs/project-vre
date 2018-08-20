$(function() {
  $(".nav-icon-phone").click(function() {
    $(".nav-icon-info-mobile-phone").fadeToggle(0);
  });

  $(".nav-icon-phone-mobile").click(function() {
    $(".nav-icon-info-mobile-hamburger-phone").fadeToggle(0);
  });

  $(document).on("click", function(e) {
    var $target = $(e.target);
    if (
      !$target.is(".nav-icon-phone") &&
      !$target.is(".nav-icon-info-mobile-phone")
    ) {
      $(".nav-icon-info-mobile-phone").fadeOut(0);
    }

    if (
      !$target.is(".nav-icon-phone-mobile") &&
      !$target.is(".nav-icon-info-mobile-hamburger-phone")
    ) {
      $(".nav-icon-info-mobile-hamburger-phone").fadeOut(0);
    }
  });
});

$("#selected-vacancie").on("change", function() {
  if ($(this).val() === "Accounting/Finance") {
    $(".selected-accounting-finance").show();
    $(".selected-administrative").hide();
    $(".selected-architecture").hide();
    $(".selected-business-development").hide();
    $(".selected-engineering").hide();
    $(".selected-commercial").hide();
    $(".selected-sales").hide();
  } else if ($(this).val() === "Administrative") {
    $(".selected-administrative").show();
    $(".selected-accounting-finance").hide();
    $(".selected-architecture").hide();
    $(".selected-business-development").hide();
    $(".selected-engineering").hide();
    $(".selected-commercial").hide();
    $(".selected-sales").hide();
  } else if ($(this).val() === "Architecture") {
    $(".selected-architecture").show();
    $(".selected-accounting-finance").hide();
    $(".selected-administrative").hide();
    $(".selected-business-development").hide();
    $(".selected-engineering").hide();
    $(".selected-commercial").hide();
    $(".selected-sales").hide();
  } else if ($(this).val() === "Business Development") {
    $(".selected-business-development").show();
    $(".selected-accounting-finance").hide();
    $(".selected-administrative").hide();
    $(".selected-architecture").hide();
    $(".selected-engineering").hide();
    $(".selected-commercial").hide();
    $(".selected-sales").hide();
  } else if ($(this).val() === "Engineering") {
    $(".selected-engineering").show();
    $(".selected-accounting-finance").hide();
    $(".selected-administrative").hide();
    $(".selected-architecture").hide();
    $(".selected-business-development").hide();
    $(".selected-commercial").hide();
    $(".selected-sales").hide();
  } else if ($(this).val() === "Commercial") {
    $(".selected-commercial").show();
    $(".selected-accounting-finance").hide();
    $(".selected-administrative").hide();
    $(".selected-architecture").hide();
    $(".selected-business-development").hide();
    $(".selected-engineering").hide();
    $(".selected-sales").hide();
  } else if ($(this).val() === "Sales") {
    $(".selected-sales").show();
    $(".selected-accounting-finance").hide();
    $(".selected-administrative").hide();
    $(".selected-architecture").hide();
    $(".selected-business-development").hide();
    $(".selected-engineering").hide();
    $(".selected-commercial").hide();
  }
});

var insertMap = (function() {
  "use strict";
  /*global google*/
  return function(latLng, mapTitle, zoom, locations) {
    function init() {
      var mapZoom = zoom !== undefined ? zoom : 13,
        mapDOM = document.getElementById("location-map"),
        mapOptions,
        map,
        marker,
        markers = [];
      mapOptions = {
        zoom: mapZoom,
        center: new google.maps.LatLng(latLng[0], latLng[1]),
        styles: [
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [
              {
                saturation: 36
              },
              {
                color: "#333333"
              },
              {
                lightness: 40
              }
            ]
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [
              {
                visibility: "on"
              },
              {
                color: "#ffffff"
              },
              {
                lightness: 16
              }
            ]
          },
          {
            featureType: "all",
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#fefefe"
              },
              {
                lightness: 20
              }
            ]
          },
          {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#fefefe"
              },
              {
                lightness: 17
              },
              {
                weight: 1.2
              }
            ]
          },
          {
            featureType: "administrative.province",
            elementType: "labels.text",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "administrative.locality",
            elementType: "labels.text",
            stylers: [
              {
                visibility: "simplified"
              },
              {
                lightness: "-11"
              },
              {
                gamma: "1.07"
              },
              {
                weight: "0.93"
              }
            ]
          },
          {
            featureType: "administrative.neighborhood",
            elementType: "labels.text",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "administrative.land_parcel",
            elementType: "geometry",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "administrative.land_parcel",
            elementType: "labels.text",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [
              {
                color: "#f5f5f5"
              },
              {
                lightness: 20
              }
            ]
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
              {
                color: "#f5f5f5"
              },
              {
                lightness: 21
              }
            ]
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [
              {
                color: "#dedede"
              },
              {
                lightness: 21
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#ffffff"
              },
              {
                lightness: 17
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#ffffff"
              },
              {
                lightness: 29
              },
              {
                weight: 0.2
              }
            ]
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [
              {
                color: "#ffffff"
              },
              {
                lightness: 18
              }
            ]
          },
          {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [
              {
                color: "#ffffff"
              },
              {
                lightness: 16
              }
            ]
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [
              {
                color: "#f2f2f2"
              },
              {
                lightness: 19
              }
            ]
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [
              {
                color: "#e9e9e9"
              },
              {
                lightness: 17
              }
            ]
          }
        ]
      };
      map = new google.maps.Map(mapDOM, mapOptions);
      if (!locations) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(latLng[0], latLng[1]),
          map: map,
          title: mapTitle
        });
        markers.push(marker);
      } else {
        locations.forEach(function(item) {
          var item_marker = new google.maps.Marker({
            position: new google.maps.LatLng(
              item.coordinates[0],
              item.coordinates[1]
            ),
            map: map,
            title: item.title
          });
          markers.push(item_marker);
        });
      }
    }
    google.maps.event.addDomListener(window, "load", init);
  };
})();

(function() {
  window.onload = insertMap([19.395001, -99.17667], "Desarrollos", 14, [
    {
      coordinates: [19.386183, -99.178583],
      title: "Indiana 176"
    },
    {
      coordinates: [19.38895, -99.178761],
      title: "Dakota 322"
    },
    {
      coordinates: [19.402214, -99.165347],
      title: "Tlacotalpan 146"
    },
    {
      coordinates: [19.395001, -99.17667],
      title: "Nebraska 159"
    },
    {
      coordinates: [19.397481, -99.174528],
      title: "Chicago 61"
    },
    {
      coordinates: [19.380275, -99.177901],
      title: "Carolina 149"
    },
    {
      coordinates: [19.3902978, -99.16869350000002],
      title: "Concepción Beistegui 512"
    },
    {
      coordinates: [19.3801826, -99.17853129999997],
      title: "Atlanta 186"
    },
    {
      coordinates: [19.405014, -99.177363],
      title: "Comercio 44"
    }
  ]);
})();

(function() {
  var btnTabs = $(".vre-btntabs-develop");
  var allDevelops = $(".vre-develop-todos");

  btnTabs.on("click", function(evt) {
    var developSection = evt.currentTarget.name;
    var currentSection = "";

    if (
      developSection == "todos" ||
      developSection == "preventa" ||
      developSection == "inmediata" ||
      developSection == "vendido"
    ) {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");
      currentSection = allDevelops.filter(".vre-develop-" + developSection);
      $(".homepage-developments-items").html(currentSection);
    }
  });
})();
