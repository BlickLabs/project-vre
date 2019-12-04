$(function() {
  $(".nav-icon-phone").click(function() {
    $(".nav-icon-info-mobile-phone").fadeToggle(0);
  });

  $(".nav-icon-phone-mobile").click(function() {
    $(".nav-icon-info-mobile-hamburger-phone").fadeToggle(0);
  });

  $(document).on("touchstart click scroll", function(e) {
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

(function() {
  $("#selected-vacancie").on("change", function() {
    if ($(this).val() === "Accounting/Finance") {
      $(".selected-accounting-finance")
        .show().children().filter('select').attr('required', 'required');
      $(".selected-administrative").hide()
      .children().filter('select').removeAttr('required');
      $(".selected-architecture").hide()
      .children().filter('select').removeAttr('required');
      $(".selected-business-development").hide()
      .children().filter('select').removeAttr('required');
      $(".selected-engineering").hide()
      .children().filter('select').removeAttr('required');
      $(".selected-commercial").hide()
      .children().filter('select').removeAttr('required');
      $(".selected-sales").hide()
      .children().filter('select').removeAttr('required');
    } else if ($(this).val() === "Administrative") {
      $(".selected-administrative")
        .show().children().filter('select').attr('required', 'required');
      $(".selected-accounting-finance").hide()
      .children().filter('select').removeAttr('required');
      $(".selected-architecture").hide()
      .children().filter('select').removeAttr('required');
      $(".selected-business-development").hide()
      .children().filter('select').removeAttr('required');
      $(".selected-engineering").hide()
      .children().filter('select').removeAttr('required');
      $(".selected-commercial").hide()
      .children().filter('select').removeAttr('required');
      $(".selected-sales").hide()
      .children().filter('select').removeAttr('required');
    } else if ($(this).val() === "Architecture") {
      $(".selected-architecture")
        .show().children().filter('select').attr('required', 'required');
      $(".selected-accounting-finance").hide()
      .children().filter('select').removeAttr('required');
      $(".selected-administrative").hide()
      .children().filter('select').removeAttr('required');
      $(".selected-business-development").hide()
      .children().filter('select').removeAttr('required');
      $(".selected-engineering").hide()
      .children().filter('select').removeAttr('required');
      $(".selected-commercial").hide()
      .children().filter('select').removeAttr('required');
      $(".selected-sales").hide()
      .children().filter('select').removeAttr('required');
    } else if ($(this).val() === "Business Development") {
      $(".selected-business-development")
      .show().children().filter('select').attr('required', 'required');
      $(".selected-accounting-finance").hide()
      .children().filter('select').removeAttr('required');
      $(".selected-administrative").hide()
      .children().filter('select').removeAttr('required');
      $(".selected-architecture").hide()
      .children().filter('select').removeAttr('required');
      $(".selected-engineering").hide()
      .children().filter('select').removeAttr('required');
      $(".selected-commercial").hide()
      .children().filter('select').removeAttr('required');
      $(".selected-sales").hide()
      .children().filter('select').removeAttr('required');
    } else if ($(this).val() === "Engineering") {
      $(".selected-engineering")
      .show().children().filter('select').attr('required', 'required');
      $(".selected-accounting-finance").hide()
      .children().filter('select').removeAttr('required');
      $(".selected-administrative").hide()
      .children().filter('select').removeAttr('required');
      $(".selected-architecture").hide()
      .children().filter('select').removeAttr('required');
      $(".selected-business-development").hide()
      .children().filter('select').removeAttr('required');
      $(".selected-commercial").hide()
      .children().filter('select').removeAttr('required');
      $(".selected-sales").hide()
      .children().filter('select').removeAttr('required');
    } else if ($(this).val() === "Commercial") {
      $(".selected-commercial")
      .show().children().filter('select').attr('required', 'required');
      $(".selected-accounting-finance").hide()
      .children().filter('select').removeAttr('required');
      $(".selected-administrative").hide()
      .children().filter('select').removeAttr('required');
      $(".selected-architecture").hide()
      .children().filter('select').removeAttr('required');
      $(".selected-business-development").hide()
      .children().filter('select').removeAttr('required');
      $(".selected-engineering").hide()
      .children().filter('select').removeAttr('required');
      $(".selected-sales").hide()
      .children().filter('select').removeAttr('required');
    } else if ($(this).val() === "Sales") {
      $(".selected-sales")
      .show().children().filter('select').attr('required', 'required');
      $(".selected-accounting-finance").hide()
      .children().filter('select').removeAttr('required');
      $(".selected-administrative").hide()
      .children().filter('select').removeAttr('required');
      $(".selected-architecture").hide()
      .children().filter('select').removeAttr('required');
      $(".selected-business-development").hide()
      .children().filter('select').removeAttr('required');
      $(".selected-engineering").hide()
      .children().filter('select').removeAttr('required');
      $(".selected-commercial").hide()
      .children().filter('select').removeAttr('required');
    }
  });
})();

var insertMap = (function() {
  "use strict";
  return function(latLng, mapTitle, zoom, locations) {
    function init() {
      var mapZoom = zoom !== undefined ? zoom : 13,
        mapDOM = document.getElementById("location-map"),
        mapOptions,
        map,
        marker,
        markers = [];
      mapOptions = {
        zoom: 13,
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
          if (item.title == "Carolina 149" || item.title == "Coyoacán 1424" || item.title == "Comercio 44" || item.title == "Concepción Beistegui 512") {
            var item_marker = new google.maps.Marker({
              position: new google.maps.LatLng(
                item.coordinates[0],
                item.coordinates[1]
              ),
              map: map,
              title: item.title,
              icon: '/img/icons/orange-marker.png'
            });
            markers.push(item_marker);
          } else {
            var item_marker = new google.maps.Marker({
              position: new google.maps.LatLng(
                item.coordinates[0],
                item.coordinates[1]
              ),
              map: map,
              title: item.title
            });
            markers.push(item_marker);
          }
        });
      }
    }
    google.maps.event.addDomListener(window, "load", init);
  };
})();

/*
  * La variable departamentos_json queda declarada de manera global
  * para poder acceder a ella desde cualquier parte, y asi poder hacer
  * las peticiones como si fuera un API.
  *
  * Ya en cada vista de los desarrollos, por ejemplo: Beistegui,
  * Indiana, Dakota, etc..
  *
  * Se puede crear una variable que contenga solo la informacion de ese desarrollo
  * Ejemplo:
  *
  * let beistegui = departamentos_json.departamentos.beistegui
  *
  * El cual nos dara un objeto con la info de todos sus departamentos
  * y caracteristicas.
  */

/*
  * Se transforma en una cadena valida JSON para su posterior
  * uso con JSON.parse().
  */

var departamentos_text = JSON.stringify({
  departamentos: {
    indiana: {
      depa101: {
        caracteristicas: {
          metros: "77.5 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2.5 Baños",
          estacionamiento: "1 Lugar E.",
          plano: "indiana-plano-101.jpg"
        }
      },
      depa102: {
        caracteristicas: {
          metros: "105.6 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2.5 Baños",
          estacionamiento: "2 Lugares E.",
          terraza: "Terraza",
          plano: "indiana-plano-102.jpg"
        }
      },
      depa201: {
        caracteristicas: {
          metros: "86.87 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2.5 Baños",
          estacionamiento: "1 Lugar E.",
          balcon: "Balcón",
          plano: "indiana-plano-201.jpg"
        }
      },
      depa202: {
        caracteristicas: {
          metros: "81.6 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2.5 Baños",
          estacionamiento: "2 Lugares E.",
          plano: "indiana-plano-202.jpg"
        }
      },
      depa301: {
        caracteristicas: {
          metros: "86.87 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2.5 Baños",
          estacionamiento: "2 Lugares E.",
          balcon: "Balcón",
          plano: "indiana-plano-301.jpg"
        }
      },
      depa302: {
        caracteristicas: {
          metros: "81.6 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2.5 Baños",
          estacionamiento: "1 Lugar E.",
          roof: "Roof Privado",
          plano: "indiana-plano-302.jpg"
        }
      }
    },
    dakota: {
      depa101: {
        caracteristicas: {
          metros: "77.5 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2.5 Baños",
          estacionamiento: "1 Lugar E.",
          plano: "dakota-plano-101.jpg"
        }
      },
      depa102: {
        caracteristicas: {
          metros: "116.63 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2.5 Baños",
          estacionamiento: "2 Lugares E.",
          terraza: "Terraza",
          plano: "dakota-plano-102.jpg"
        }
      },
      depa201: {
        caracteristicas: {
          metros: "86.87 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2.5 Baños",
          estacionamiento: "2 Lugares E.",
          balcon: "Balcón",
          plano: "dakota-plano-201.jpg"
        }
      },
      depa202: {
        caracteristicas: {
          metros: "86.5 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2.5 Baños",
          estacionamiento: "1 Lugar E.",
          plano: "dakota-plano-202.jpg"
        }
      },
      depa301: {
        caracteristicas: {
          metros: "86.87 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2.5 Baños",
          estacionamiento: "2 Lugares E.",
          balcon: "Balcón",
          plano: "dakota-plano-301.jpg"
        }
      },
      depa302: {
        caracteristicas: {
          metros: "86.5 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2.5 Baños",
          estacionamiento: "1 Lugar E.",
          roof: "Roof Privado",
          plano: "dakota-plano-302.jpg"
        }
      }
    },
    tlacotalpan: {
      depa101: {
        caracteristicas: {
          metros: "73.8 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2.5 Baños",
          estacionamiento: "2 Lugares E.",
          plano: "tlacotalpan-plano-101.jpg"
        }
      },
      depa102: {
        caracteristicas: {
          metros: "96.7 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2.0 Baños",
          estacionamiento: "1 Lugar E.",
          terraza: "Terraza",
          plano: "tlacotalpan-plano-102.jpg"
        }
      },
      depa201: {
        caracteristicas: {
          metros: "156.8 m&sup2;",
          recamaras: "3 Recámaras",
          banio: "3.5 Baños",
          estacionamiento: "2 Lugares E.",
          balcon: "Balcón",
          plano: "tlacotalpan-plano-201.jpg"
        }
      },
      depa301: {
        caracteristicas: {
          metros: "201.5 m&sup2;",
          recamaras: "3 Recámaras",
          banio: "3.5 Baños",
          estacionamiento: "3 Lugares E.",
          roof: "Roof Privado",
          plano: "tlacotalpan-plano-301.jpg"
        }
      }
    },
    nebraska: {
      depa101: {
        caracteristicas: {
          metros: "77.2 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2.5 Baños",
          estacionamiento: "2 Lugares E.",
          plano: "nebraska-plano-101.jpg"
        }
      },
      depa102: {
        caracteristicas: {
          metros: "104.8 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2.0 Baños",
          estacionamiento: "2 Lugares E.",
          terraza: "Terraza",
          plano: "nebraska-plano-102.jpg"
        }
      },
      depa201: {
        caracteristicas: {
          metros: "87.2 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2.5 Baños",
          estacionamiento: "1 Lugar E.",
          balcon: "Balcón",
          plano: "nebraska-plano-201.jpg"
        }
      },
      depa202: {
        caracteristicas: {
          metros: "78.5 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2.0 Baños",
          estacionamiento: "1 Lugar E.",
          plano: "nebraska-plano-202.jpg"
        }
      },
      depa301: {
        caracteristicas: {
          metros: "87.2 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2.5 Baños",
          estacionamiento: "2 Lugares E.",
          balcon: "Balcón",
          plano: "nebraska-plano-301.jpg"
        }
      },
      depa302: {
        caracteristicas: {
          metros: "121.9 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2.0 Baños",
          estacionamiento: "1 Lugar E.",
          roof: "Roof Privado",
          plano: "nebraska-plano-302.jpg"
        }
      }
    },
    chicago: {
      depa101: {
        caracteristicas: {
          metros: "64.5 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2.0 Baños",
          estacionamiento: "1 Lugar E.",
          plano: "chicago-plano-101.jpg"
        }
      },
      depa102: {
        caracteristicas: {
          metros: "91.12 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2.0 Baños",
          estacionamiento: "1 Lugar E.",
          terraza: "Terraza",
          plano: "chicago-plano-102.jpg"
        }
      },
      depa201: {
        caracteristicas: {
          metros: "71.72 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2.0 Baños",
          estacionamiento: "1 Lugar E.",
          balcon: "Balcón",
          plano: "chicago-plano-201.jpg"
        }
      },
      depa202: {
        caracteristicas: {
          metros: "66.65 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2.0 Baños",
          estacionamiento: "1 Lugar E.",
          plano: "chicago-plano-202.jpg"
        }
      },
      depa301: {
        caracteristicas: {
          metros: "71.5 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2.0 Baños",
          estacionamiento: "1 Lugar E.",
          balcon: "Balcón",
          plano: "chicago-plano-301.jpg"
        }
      },
      depa302: {
        caracteristicas: {
          metros: "99.3 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2.0 Baños",
          estacionamiento: "1 Lugar E.",
          roof: "Roof Privado",
          plano: "chicago-plano-302.jpg"
        }
      }
    },
    atlanta: {
      depa101: {
        caracteristicas: {
          metros: "112.6 m&sup2;",
          recamaras: "3 Recámaras",
          banio: "2.0 Baños",
          estacionamiento: "2 Lugares E.",
          balcon: "Balcón",
          plano: "atlanta-plano-101.jpg"
        }
      },
      depa102: {
        caracteristicas: {
          metros: "112.1 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2.0 Baños",
          estacionamiento: "1 Lugar E.",
          terraza: "Terraza",
          plano: "atlanta-plano-102.jpg"
        }
      },
      depa201: {
        caracteristicas: {
          metros: "116.46 m&sup2;",
          recamaras: "3 Recámaras",
          banio: "2.0 Baños",
          estacionamiento: "2 Lugares E.",
          balcon: "Balcón",
          plano: "atlanta-plano-201.jpg"
        }
      },
      depa202: {
        caracteristicas: {
          metros: "79.6 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2.0 Baños",
          estacionamiento: "1 Lugar E.",
          plano: "atlanta-plano-202.jpg"
        }
      },
      depa301: {
        caracteristicas: {
          metros: "166.96 m&sup2;",
          recamaras: "3 Recámaras",
          banio: "2.0 Baños",
          estacionamiento: "2 Lugares E.",
          roof: "Roof Privado",
          balcon: "Balcón",
          plano: "atlanta-plano-301.jpg"
        }
      },
      depa302: {
        caracteristicas: {
          metros: "131.5 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2 Baños",
          estacionamiento: "2 Lugar E.",
          roof: "Roof Privado",
          plano: "atlanta-plano-302.jpg"
        }
      }
    },
    carolina: {
      depa101: {
        caracteristicas: {
          metros: "112.5 m&sup2;",
          recamaras: "3 Recámaras",
          banio: "2.0 Baños",
          estacionamiento: "2 Lugares E.",
          balcon: "Balcón",
          plano: "carolina-plano-101.jpg"
        }
      },
      depa102: {
        caracteristicas: {
          metros: "112.1 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2.0 Baños",
          estacionamiento: "2 Lugares E.",
          terraza: "Terraza",
          plano: "carolina-plano-102.jpg"
        }
      },
      depa201: {
        caracteristicas: {
          metros: "116.7 m&sup2;",
          recamaras: "3 Recámaras",
          banio: "2.0 Baños",
          estacionamiento: "2 Lugares E.",
          balcon: "Balcón",
          plano: "carolina-plano-201.jpg"
        }
      },
      depa202: {
        caracteristicas: {
          metros: "79.6 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2.0 Baños",
          estacionamiento: "1 Lugar E.",
          plano: "carolina-plano-202.jpg"
        }
      },
      depa301: {
        caracteristicas: {
          metros: "166.96 m&sup2;",
          recamaras: "3 Recámaras",
          banio: "2.0 Baños",
          estacionamiento: "2 Lugares E.",
          roof: "Roof Privado",
          balcon: "Balcón",
          plano: "carolina-plano-301.jpg"
        }
      },
      depa302: {
        caracteristicas: {
          metros: "131.5 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2.0 Baños",
          estacionamiento: "1 Lugar E.",
          roof: "Roof Privado",
          plano: "carolina-plano-302.jpg"
        }
      }
    },
    comercio: {
      depa101: {
        caracteristicas: {
          metros: "122.6.1 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2.5 Baños",
          estacionamiento: "2 Lugares E.",
          balcon: "Balcón",
          plano: "comercio-plano-101.jpg"
        }
      },
      depa102: {
        caracteristicas: {
          metros: "168.2 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2 Baños",
          estacionamiento: "2 Lugares E.",
          terraza: "Terraza",
          plano: "comercio-plano-102.jpg"
        }
      },
      depa201: {
        caracteristicas: {
          metros: "136.4 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2.5 Baños",
          estacionamiento: "2 Lugares E.",
          balcon: "Balcón",
          plano: "comercio-plano-201.jpg"
        }
      },
      depa202: {
        caracteristicas: {
          metros: "99.3 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2 Baños",
          estacionamiento: "2 Lugares E.",
          plano: "comercio-plano-202.jpg"
        }
      },
      depa301: {
        caracteristicas: {
          metros: "71.6 m&sup2;",
          recamaras: "1 Recámara",
          banio: "1 Baños",
          estacionamiento: "1 Lugar E.",
          balcon: "Balcón",
          plano: "comercio-plano-301.jpg"
        }
      },
      depa302: {
        caracteristicas: {
          metros: "99.3 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2 Baños",
          estacionamiento: "2 Lugares E.",
          plano: "comercio-plano-302.jpg"
        }
      },
      depa303: {
        caracteristicas: {
          metros: "66.2 m&sup2;",
          recamaras: "1 Recámara",
          banio: "1 Baños",
          estacionamiento: "1 Lugar E.",
          balcon: "Balcón",
          plano: "comercio-plano-303.jpg"
        }
      },
      roof1: {
        caracteristicas: {
          metros: "46.7 m&sup2;",
          plano: "comercio-plano-roof_1.jpg"
        }
      },
      roof2: {
        caracteristicas: {
          metros: "43.8 m&sup2;",
          plano: "comercio-plano-roof_2.jpg"
        }
      }
    },
    beistegui: {
      depa101: {
        caracteristicas: {
          metros: "168.2 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2.5 Baños",
          estacionamiento: "1 Lugar E.",
          terraza: "Terraza",
          balcon: "Balcón",
          plano: "beistegui-plano-101.jpg"
        }
      },
      depa102: {
        caracteristicas: {
          metros: "221.7 m&sup2;",
          recamaras: "3 Recámaras",
          banio: "3.5 Baños",
          estacionamiento: "3 Lugares E.",
          terraza: "Terraza",
          balcon: "Balcón",
          plano: "beistegui-plano-102.jpg"
        }
      },
      depa201: {
        caracteristicas: {
          metros: "129.3 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2.5 Baños",
          estacionamiento: "1 Lugar E.",
          balcon: "Balcón",
          plano: "beistegui-plano-201.jpg"
        }
      },
      depa202: {
        caracteristicas: {
          metros: "188.0 m&sup2;",
          recamaras: "3 Recámaras",
          banio: "3.5 Baños",
          estacionamiento: "3 Lugares E.",
          balcon: "Balcón",
          plano: "beistegui-plano-202.jpg"
        }
      },
      depa301: {
        caracteristicas: {
          metros: "129.3 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2.5 Baños",
          estacionamiento: "1 Lugar E.",
          balcon: "Balcón",
          plano: "beistegui-plano-301.jpg"
        }
      },
      depa302: {
        caracteristicas: {
          metros: "188.0 m&sup2;",
          recamaras: "3 Recámaras",
          banio: "3.5 Baños",
          estacionamiento: "3 Lugares E.",
          balcon: "Balcón",
          plano: "beistegui-plano-302.jpg"
        }
      },
      depa401: {
        caracteristicas: {
          metros: "179.8 m&sup2;",
          recamaras: "2 Recámaras",
          banio: "2.5 Baños",
          estacionamiento: "2 Lugares E.",
          roof: "Roof Privado",
          balcon: "Balcón",
          plano: "beistegui-plano-401.jpg"
        }
      },
      depa402: {
        caracteristicas: {
          metros: "233.4 m&sup2;",
          recamaras: "3 Recámaras",
          banio: "3.5 Baños",
          estacionamiento: "3 Lugares E.",
          roof: "Roof Privado",
          balcon: "Balcón",
          plano: "beistegui-plano-402.jpg"
        }
      }
    },
    coyoacan: {
      tipoa: {
        caracteristicas: {
          metros: "78.14 - 98.59 m&sup2;",
          recamaras: "1 - 2 Recámaras",
          banio: "1 - 2 Baños",
          estacionamiento: "1 - 2 Lugares Estacionamiento",
          balcon: "Con Opción",
          plano: "coyoacan-plano-tipo-a.jpg"
        }
      },
      tipob: {
        caracteristicas: {
          metros: "67.5 - 128.52 m&sup2",
          recamaras: "1 Recámara",
          banio: "1 Baño",
          estacionamiento: "1 Lugar Estacionamiento",
          terraza: "Con Opción",
          roof: "Privado con Opción",
          plano: "coyoacan-plano-tipo-b.jpg"
        }
      },
      tipoc: {
        caracteristicas: {
          metros: "81.1 - 89.67 m&sup2",
          recamaras: "1 - 2 Recámaras",
          banio: "1 - 2 Baños",
          estacionamiento: "1 - 2  Lugares Estacionamiento",
          balcon: "Con Opción",
          plano: "coyoacan-plano-tipo-c.jpg"
        }
      },
      tipod: {
        caracteristicas: {
          metros: "71.46 - 137.77 m&sup2",
          recamaras: "1 Recámara",
          banio: "1 Baño",
          estacionamiento: "1 - 2  Lugares Estacionamiento",
          terraza: "Con Opción",
          roof: "Privado con Opción",
          plano: "coyoacan-plano-tipo-d.jpg"
        }
      },
      tipoe: {
        caracteristicas: {
          metros: "85.91 - 153.77 m&sup2",
          recamaras: "2 Recámaras",
          banio: "2 - 2.5 Baños",
          estacionamiento: "1 - 2  Lugares Estacionamiento",
          balcon: "Con Opción",
          roof: "Privado con Opción",
          plano: "coyoacan-plano-tipo-e.jpg"
        }
      },
      tipof: {
        caracteristicas: {
          metros: "67.5 - 129.23 m&sup2",
          recamaras: "1 Recámara",
          banio: "1 Baño",
          estacionamiento: "1 Lugar Estacionamiento",
          terraza: "Con Opción",
          roof: "Privado con Opción",
          plano: "coyoacan-plano-tipo-f.jpg"
        }
      },
      roof: {
        caracteristicas: {
          metros: "49.3 m&sup2",
          plano: "coyoacan-plano-rg.jpg"
        }
      }
    },
    colima49: {
      d102: {
        caracteristicas: {
          metros: "198.3 m&sup2",
          recamaras: "2 Recámaras",
          banio: "3 Baños",
          estacionamiento: "2 Lugares E.",
          terraza: "Terraza",
          plano: "colima49-plano-102.jpg"
        }
      },
      d301: {
        caracteristicas: {
          metros: "195.1 m&sup2",
          recamaras: "2 Recámaras",
          banio: "2.5 Baños",
          estacionamiento: "2 Lugares E.",
          balcon: "Balcón",
          roof: "Roof Privado",
          plano: "colima49-plano-301.jpg"
        }
      },
      d302: {
        caracteristicas: {
          metros: "165.6 m&sup2",
          recamaras: "2 Recámaras",
          banio: "3 Baños",
          estacionamiento: "2 Lugares E.",
          plano: "colima49-plano-302.jpg"
        }
      },
      d401: {
        caracteristicas: {
          metros: "196.7 m&sup2",
          recamaras: "2 Recámaras",
          banio: "2.5 Baños",
          estacionamiento: "2 Lugares E.",
          balcon: "Balcón",
          roof: "Roof Privado",
          plano: "colima49-plano-401.jpg"
        }
      },
      d402: {
        caracteristicas: {
          metros: "137.6 m&sup2",
          recamaras: "1 Recámara",
          banio: "2 Baños",
          estacionamiento: "1 Lugar E.",
          roof: "Roof Privado",
          plano: "colima49-plano-402.jpg"
        }
      },
      d403: {
        caracteristicas: {
          metros: "216.4 m&sup2",
          recamaras: "2 Recámaras",
          banio: "2.5 Baños",
          estacionamiento: "2 Lugares E.",
          balcon: "Balcón",
          roof: "Roof Privado",
          plano: "colima49-plano-403.jpg"
        }
      },
      roofcomun: {
        caracteristicas: {
          metros: "80.10 m&sup2;",
          plano: "colima49-plano-rgpcomun.png"
        }
      },
      roof301: {
        caracteristicas: {
          metros: "49.7 m&sup2;",
          plano: "colima49-plano-rgp301.png"
        }
      },
      roof401: {
        caracteristicas: {
          metros: "51.3 m&sup2;",
          plano: "colima49-plano-rgp401.png"
        }
      },
      roof402: {
        caracteristicas: {
          metros: "68.8 m&sup2;",
          plano: "colima49-plano-rgp402.png"
        }
      },
      roof403: {
        caracteristicas: {
          metros: "53.2 m&sup2;",
          plano: "colima49-plano-rgp403.png"
        }
      } 
    }
  }
});

/*
* Se parsea la cadena valida JSON.
*/

var departamentos_json = JSON.parse(departamentos_text);

/**
 * Obtiene el elemento padre de la lista de caracteristicas,
 * Para poder eliminar y agregar las nuevas caractetristicas segun el, desarrollo y departamento seleccionado.
 */

var lista_de_caracteristicas = document.querySelector(".department-icons");

var activar_elemento = function(el) {
  var length = el.parentNode.children.length;
  var elementos_de_lista = el.parentNode.children;

  for (var i = 0; i < length; i++) {
    if (elementos_de_lista[i].classList.contains("active")) {
      elementos_de_lista[i].classList.remove("active");
    }
    el.classList.add("active");
  }
};

/**
 * Actualiza la lista y la imagen del plano.
 * */

var actualizar_caracteristicas = function(el, desarrollo) {
  var lista_actual = document.querySelector(".icons-list");
  var plano = document.querySelector(".department-img img");
  var departamento = el.dataset.id;
  var info_desarrollo = departamentos_json.departamentos[desarrollo][departamento];
  var nuevas_caracteristicas = "";

  nuevas_caracteristicas = caracteristicas(departamento, desarrollo);
  lista_de_caracteristicas.removeChild(lista_actual);
  lista_de_caracteristicas.appendChild(nuevas_caracteristicas);
  activar_elemento(el);
  plano.src = "/img/vre/" + desarrollo + "/" + info_desarrollo.caracteristicas.plano;
};

/**
 * Retorna el elemento UL.
 * Y sus elementos hijos LI ya con las caracteristicas.
 * */

var caracteristicas = function(depa, desa) {
  /**
   * Se obtiene toda la informacion del departamento.
   * departamentos_json es parte del archivo info-departamentos.json.js
   * Contiene en formato JSON toda la inforamcion.
   * */
  var desarrollo = departamentos_json.departamentos[desa];
  var caracteristicas = desarrollo[depa].caracteristicas;
  
   /**
   * Se crean elementos de lista, con las caracteristicas del departamento.
   * */
  var ul = document.createElement("ul");
  ul.className = "icons-list";

  for (var caracteristica in caracteristicas) {
    if (caracteristica !== "plano") {
      var li = document.createElement("li");
      var img = document.createElement("img");
      var p = document.createElement("p");

      li.className = "list-item";
      img.src = "/img/vre/" + caracteristica + ".png";
      p.innerHTML = caracteristicas[caracteristica];

      li.appendChild(img);
      li.appendChild(p);
      ul.appendChild(li);
    }
  }

  if (ul.children.length === 1) {
    ul.classList.add("icons-center");
    return ul;
  } else {
    return ul;
  }
};
