function doSomething(e){"/index.html"!==window.location.pathname&&"/"!==window.location.pathname&&"/project-vre/index.html"!==window.location.pathname&&"/project-vre/"!==window.location.pathname||(e>30?(setNav.classList.add("nav-scroll"),$(".nav-logo-white").addClass("nav-logo-orange"),$(".nav-icon-phone").addClass("nav-icon-phone-gray"),$(".nav-icon-whatsapp").addClass("nav-icon-whatsapp-gray"),$(".nav-option").addClass("nav-option-gray"),$(".nav-hamburger-icon").addClass("nav-hamburger-icon-orange")):(setNav.classList.remove("nav-scroll"),$(".nav-logo-white").removeClass("nav-logo-orange"),$(".nav-icon-phone").removeClass("nav-icon-phone-gray"),$(".nav-icon-whatsapp").removeClass("nav-icon-whatsapp-gray"),$(".nav-option").removeClass("nav-option-gray"),$(".nav-hamburger-icon").removeClass("nav-hamburger-icon-orange")))}function showMenu(){document.querySelector("#menuContainer").style.width="85%",document.querySelector("#hamburgerMenu").style.display="none",document.querySelector(".if-hamburger-open").style.display="none",document.querySelector(".nav-icon-container").style.display="none"}function hideMenu(){document.querySelector("#menuContainer").style.width="0%",document.querySelector("#hamburgerMenu").style.display="inline",document.querySelector(".if-hamburger-open").style.display="block",document.querySelector(".nav-icon-container").style.display="flex"}$(function(){$(".nav-icon-phone").click(function(){$(".nav-icon-info-mobile-phone").fadeToggle(0)}),$(".nav-icon-phone-mobile").click(function(){$(".nav-icon-info-mobile-hamburger-phone").fadeToggle(0)}),$(document).on("touchstart click scroll",function(e){var a=$(e.target);a.is(".nav-icon-phone")||a.is(".nav-icon-info-mobile-phone")||$(".nav-icon-info-mobile-phone").fadeOut(0),a.is(".nav-icon-phone-mobile")||a.is(".nav-icon-info-mobile-hamburger-phone")||$(".nav-icon-info-mobile-hamburger-phone").fadeOut(0)})}),function(){$("#selected-vacancie").on("change",function(){"Accounting/Finance"===$(this).val()?($(".selected-accounting-finance").show().children().filter("select").attr("required","required"),$(".selected-administrative").hide().children().filter("select").removeAttr("required"),$(".selected-architecture").hide().children().filter("select").removeAttr("required"),$(".selected-business-development").hide().children().filter("select").removeAttr("required"),$(".selected-engineering").hide().children().filter("select").removeAttr("required"),$(".selected-commercial").hide().children().filter("select").removeAttr("required"),$(".selected-sales").hide().children().filter("select").removeAttr("required")):"Administrative"===$(this).val()?($(".selected-administrative").show().children().filter("select").attr("required","required"),$(".selected-accounting-finance").hide().children().filter("select").removeAttr("required"),$(".selected-architecture").hide().children().filter("select").removeAttr("required"),$(".selected-business-development").hide().children().filter("select").removeAttr("required"),$(".selected-engineering").hide().children().filter("select").removeAttr("required"),$(".selected-commercial").hide().children().filter("select").removeAttr("required"),$(".selected-sales").hide().children().filter("select").removeAttr("required")):"Architecture"===$(this).val()?($(".selected-architecture").show().children().filter("select").attr("required","required"),$(".selected-accounting-finance").hide().children().filter("select").removeAttr("required"),$(".selected-administrative").hide().children().filter("select").removeAttr("required"),$(".selected-business-development").hide().children().filter("select").removeAttr("required"),$(".selected-engineering").hide().children().filter("select").removeAttr("required"),$(".selected-commercial").hide().children().filter("select").removeAttr("required"),$(".selected-sales").hide().children().filter("select").removeAttr("required")):"Business Development"===$(this).val()?($(".selected-business-development").show().children().filter("select").attr("required","required"),$(".selected-accounting-finance").hide().children().filter("select").removeAttr("required"),$(".selected-administrative").hide().children().filter("select").removeAttr("required"),$(".selected-architecture").hide().children().filter("select").removeAttr("required"),$(".selected-engineering").hide().children().filter("select").removeAttr("required"),$(".selected-commercial").hide().children().filter("select").removeAttr("required"),$(".selected-sales").hide().children().filter("select").removeAttr("required")):"Engineering"===$(this).val()?($(".selected-engineering").show().children().filter("select").attr("required","required"),$(".selected-accounting-finance").hide().children().filter("select").removeAttr("required"),$(".selected-administrative").hide().children().filter("select").removeAttr("required"),$(".selected-architecture").hide().children().filter("select").removeAttr("required"),$(".selected-business-development").hide().children().filter("select").removeAttr("required"),$(".selected-commercial").hide().children().filter("select").removeAttr("required"),$(".selected-sales").hide().children().filter("select").removeAttr("required")):"Commercial"===$(this).val()?($(".selected-commercial").show().children().filter("select").attr("required","required"),$(".selected-accounting-finance").hide().children().filter("select").removeAttr("required"),$(".selected-administrative").hide().children().filter("select").removeAttr("required"),$(".selected-architecture").hide().children().filter("select").removeAttr("required"),$(".selected-business-development").hide().children().filter("select").removeAttr("required"),$(".selected-engineering").hide().children().filter("select").removeAttr("required"),$(".selected-sales").hide().children().filter("select").removeAttr("required")):"Sales"===$(this).val()&&($(".selected-sales").show().children().filter("select").attr("required","required"),$(".selected-accounting-finance").hide().children().filter("select").removeAttr("required"),$(".selected-administrative").hide().children().filter("select").removeAttr("required"),$(".selected-architecture").hide().children().filter("select").removeAttr("required"),$(".selected-business-development").hide().children().filter("select").removeAttr("required"),$(".selected-engineering").hide().children().filter("select").removeAttr("required"),$(".selected-commercial").hide().children().filter("select").removeAttr("required"))})}();var insertMap=function(){"use strict";return function(e,a,r,t){function o(){var o,i,n,s=void 0!==r?r:13,c=document.getElementById("location-map"),l=[];o={zoom:s,center:new google.maps.LatLng(e[0],e[1]),styles:[{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#333333"},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#ffffff"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#fefefe"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#fefefe"},{lightness:17},{weight:1.2}]},{featureType:"administrative.province",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"labels.text",stylers:[{visibility:"simplified"},{lightness:"-11"},{gamma:"1.07"},{weight:"0.93"}]},{featureType:"administrative.neighborhood",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"administrative.land_parcel",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"administrative.land_parcel",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:20}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:21}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#dedede"},{lightness:21}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffffff"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#ffffff"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:16}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#f2f2f2"},{lightness:19}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#e9e9e9"},{lightness:17}]}]},i=new google.maps.Map(c,o),t?t.forEach(function(e){var a=new google.maps.Marker({position:new google.maps.LatLng(e.coordinates[0],e.coordinates[1]),map:i,title:e.title});l.push(a)}):(n=new google.maps.Marker({position:new google.maps.LatLng(e[0],e[1]),map:i,title:a}),l.push(n))}google.maps.event.addDomListener(window,"load",o)}}(),departamentos_text=JSON.stringify({departamentos:{indiana:{depa101:{caracteristicas:{metros:"77.5 m&sup2;",recamaras:"2 Recámaras",banio:"2.5 Baños",estacionamiento:"1 Lugar E.",plano:"indiana-plano-101.jpg"}},depa102:{caracteristicas:{metros:"105.6 m&sup2;",recamaras:"2 Recámaras",banio:"2.5 Baños",estacionamiento:"2 Lugares E.",terraza:"Terraza",plano:"indiana-plano-102.jpg"}},depa201:{caracteristicas:{metros:"86.87 m&sup2;",recamaras:"2 Recámaras",banio:"2.5 Baños",estacionamiento:"1 Lugar E.",balcon:"Balcón",plano:"indiana-plano-201.jpg"}},depa202:{caracteristicas:{metros:"81.6 m&sup2;",recamaras:"2 Recámaras",banio:"2.5 Baños",estacionamiento:"2 Lugares E.",plano:"indiana-plano-202.jpg"}},depa301:{caracteristicas:{metros:"86.87 m&sup2;",recamaras:"2 Recámaras",banio:"2.5 Baños",estacionamiento:"2 Lugares E.",balcon:"Balcón",plano:"indiana-plano-301.jpg"}},depa302:{caracteristicas:{metros:"81.6 m&sup2;",recamaras:"2 Recámaras",banio:"2.5 Baños",estacionamiento:"1 Lugar E.",roof:"Roof Privado",plano:"indiana-plano-302.jpg"}}},dakota:{depa101:{caracteristicas:{metros:"77.5 m&sup2;",recamaras:"2 Recámaras",banio:"2.5 Baños",estacionamiento:"1 Lugar E.",plano:"dakota-plano-101.jpg"}},depa102:{caracteristicas:{metros:"116.63 m&sup2;",recamaras:"2 Recámaras",banio:"2.5 Baños",estacionamiento:"2 Lugares E.",terraza:"Terraza",plano:"dakota-plano-102.jpg"}},depa201:{caracteristicas:{metros:"86.87 m&sup2;",recamaras:"2 Recámaras",banio:"2.5 Baños",estacionamiento:"2 Lugares E.",balcon:"Balcón",plano:"dakota-plano-201.jpg"}},depa202:{caracteristicas:{metros:"86.5 m&sup2;",recamaras:"2 Recámaras",banio:"2.5 Baños",estacionamiento:"1 Lugar E.",plano:"dakota-plano-202.jpg"}},depa301:{caracteristicas:{metros:"86.87 m&sup2;",recamaras:"2 Recámaras",banio:"2.5 Baños",estacionamiento:"2 Lugares E.",balcon:"Balcón",plano:"dakota-plano-301.jpg"}},depa302:{caracteristicas:{metros:"86.5 m&sup2;",recamaras:"2 Recámaras",banio:"2.5 Baños",estacionamiento:"1 Lugar E.",roof:"Roof Privado",plano:"dakota-plano-302.jpg"}}},tlacotalpan:{depa101:{caracteristicas:{metros:"73.8 m&sup2;",recamaras:"2 Recámaras",banio:"2.5 Baños",estacionamiento:"2 Lugares E.",plano:"tlacotalpan-plano-101.jpg"}},depa102:{caracteristicas:{metros:"96.7 m&sup2;",recamaras:"2 Recámaras",banio:"2.0 Baños",estacionamiento:"1 Lugar E.",terraza:"Terraza",plano:"tlacotalpan-plano-102.jpg"}},depa201:{caracteristicas:{metros:"156.8 m&sup2;",recamaras:"3 Recámaras",banio:"3.5 Baños",estacionamiento:"2 Lugares E.",balcon:"Balcón",plano:"tlacotalpan-plano-201.jpg"}},depa301:{caracteristicas:{metros:"201.5 m&sup2;",recamaras:"3 Recámaras",banio:"3.5 Baños",estacionamiento:"3 Lugares E.",roof:"Roof Privado",plano:"tlacotalpan-plano-301.jpg"}}},nebraska:{depa101:{caracteristicas:{metros:"77.2 m&sup2;",recamaras:"2 Recámaras",banio:"2.5 Baños",estacionamiento:"2 Lugares E.",plano:"nebraska-plano-101.jpg"}},depa102:{caracteristicas:{metros:"104.8 m&sup2;",recamaras:"2 Recámaras",banio:"2.0 Baños",estacionamiento:"2 Lugares E.",terraza:"Terraza",plano:"nebraska-plano-102.jpg"}},depa201:{caracteristicas:{metros:"87.2 m&sup2;",recamaras:"2 Recámaras",banio:"2.5 Baños",estacionamiento:"1 Lugar E.",balcon:"Balcón",plano:"nebraska-plano-201.jpg"}},depa202:{caracteristicas:{metros:"78.5 m&sup2;",recamaras:"2 Recámaras",banio:"2.0 Baños",estacionamiento:"1 Lugar E.",plano:"nebraska-plano-202.jpg"}},depa301:{caracteristicas:{metros:"87.2 m&sup2;",recamaras:"2 Recámaras",banio:"2.5 Baños",estacionamiento:"2 Lugares E.",balcon:"Balcón",plano:"nebraska-plano-301.jpg"}},depa302:{caracteristicas:{metros:"121.9 m&sup2;",recamaras:"2 Recámaras",banio:"2.0 Baños",estacionamiento:"1 Lugar E.",roof:"Roof Privado",plano:"nebraska-plano-302.jpg"}}},chicago:{depa101:{caracteristicas:{metros:"64.5 m&sup2;",recamaras:"2 Recámaras",banio:"2.0 Baños",estacionamiento:"1 Lugar E.",plano:"chicago-plano-101.jpg"}},depa102:{caracteristicas:{metros:"91.12 m&sup2;",recamaras:"2 Recámaras",banio:"2.0 Baños",estacionamiento:"1 Lugar E.",terraza:"Terraza",plano:"chicago-plano-102.jpg"}},depa201:{caracteristicas:{metros:"71.72 m&sup2;",recamaras:"2 Recámaras",banio:"2.0 Baños",estacionamiento:"1 Lugar E.",balcon:"Balcón",plano:"chicago-plano-201.jpg"}},depa202:{caracteristicas:{metros:"66.65 m&sup2;",recamaras:"2 Recámaras",banio:"2.0 Baños",estacionamiento:"1 Lugar E.",plano:"chicago-plano-202.jpg"}},depa301:{caracteristicas:{metros:"71.5 m&sup2;",recamaras:"2 Recámaras",banio:"2.0 Baños",estacionamiento:"1 Lugar E.",balcon:"Balcón",plano:"chicago-plano-301.jpg"}},depa302:{caracteristicas:{metros:"99.3 m&sup2;",recamaras:"2 Recámaras",banio:"2.0 Baños",estacionamiento:"1 Lugar E.",roof:"Roof Privado",plano:"chicago-plano-302.jpg"}}},atlanta:{depa101:{caracteristicas:{metros:"112.6 m&sup2;",recamaras:"3 Recámaras",banio:"2.0 Baños",estacionamiento:"2 Lugares E.",balcon:"Balcón",plano:"atlanta-plano-101.jpg"}},depa102:{caracteristicas:{metros:"112.1 m&sup2;",recamaras:"2 Recámaras",banio:"2.0 Baños",estacionamiento:"1 Lugar E.",terraza:"Terraza",plano:"atlanta-plano-102.jpg"}},depa201:{caracteristicas:{metros:"116.46 m&sup2;",recamaras:"3 Recámaras",banio:"2.0 Baños",estacionamiento:"2 Lugares E.",balcon:"Balcón",plano:"atlanta-plano-201.jpg"}},depa202:{caracteristicas:{metros:"79.6 m&sup2;",recamaras:"2 Recámaras",banio:"2.0 Baños",estacionamiento:"1 Lugar E.",plano:"atlanta-plano-202.jpg"}},depa301:{caracteristicas:{metros:"166.96 m&sup2;",recamaras:"3 Recámaras",banio:"2.0 Baños",estacionamiento:"2 Lugares E.",roof:"Roof Privado",balcon:"Balcón",plano:"atlanta-plano-301.jpg"}},depa302:{caracteristicas:{metros:"131.5 m&sup2;",recamaras:"2 Recámaras",banio:"2 Baños",estacionamiento:"2 Lugar E.",roof:"Roof Privado",plano:"atlanta-plano-302.jpg"}}},carolina:{depa101:{caracteristicas:{metros:"112.5 m&sup2;",recamaras:"3 Recámaras",banio:"2.0 Baños",estacionamiento:"2 Lugares E.",balcon:"Balcón",plano:"carolina-plano-101.jpg"}},depa102:{caracteristicas:{metros:"112.1 m&sup2;",recamaras:"2 Recámaras",banio:"2.0 Baños",estacionamiento:"2 Lugares E.",terraza:"Terraza",plano:"carolina-plano-102.jpg"}},depa201:{caracteristicas:{metros:"116.7 m&sup2;",recamaras:"3 Recámaras",banio:"2.0 Baños",estacionamiento:"2 Lugares E.",balcon:"Balcón",plano:"carolina-plano-201.jpg"}},depa202:{caracteristicas:{metros:"79.6 m&sup2;",recamaras:"2 Recámaras",banio:"2.0 Baños",estacionamiento:"1 Lugar E.",plano:"carolina-plano-202.jpg"}},depa301:{caracteristicas:{metros:"166.96 m&sup2;",recamaras:"3 Recámaras",banio:"2.0 Baños",estacionamiento:"2 Lugares E.",roof:"Roof Privado",balcon:"Balcón",plano:"carolina-plano-301.jpg"}},depa302:{caracteristicas:{metros:"131.5 m&sup2;",recamaras:"2 Recámaras",banio:"2.0 Baños",estacionamiento:"1 Lugar E.",roof:"Roof Privado",plano:"carolina-plano-302.jpg"}}},comercio:{depa101:{caracteristicas:{metros:"122.6.1 m&sup2;",recamaras:"2 Recámaras",banio:"2.5 Baños",estacionamiento:"2 Lugares E.",balcon:"Balcón",plano:"comercio-plano-101.jpg"}},depa102:{caracteristicas:{metros:"168.2 m&sup2;",recamaras:"2 Recámaras",banio:"2 Baños",estacionamiento:"2 Lugares E.",terraza:"Terraza",plano:"comercio-plano-102.jpg"}},depa201:{caracteristicas:{metros:"136.4 m&sup2;",recamaras:"2 Recámaras",banio:"2.5 Baños",estacionamiento:"2 Lugares E.",balcon:"Balcón",plano:"comercio-plano-201.jpg"}},depa202:{caracteristicas:{metros:"99.3 m&sup2;",recamaras:"2 Recámaras",banio:"2 Baños",estacionamiento:"2 Lugares E.",plano:"comercio-plano-202.jpg"}},depa301:{caracteristicas:{metros:"71.6 m&sup2;",recamaras:"1 Recámara",banio:"1 Baños",estacionamiento:"1 Lugar E.",balcon:"Balcón",plano:"comercio-plano-301.jpg"}},depa302:{caracteristicas:{metros:"99.3 m&sup2;",recamaras:"2 Recámaras",banio:"2 Baños",estacionamiento:"2 Lugares E.",plano:"comercio-plano-302.jpg"}},depa303:{caracteristicas:{metros:"66.2 m&sup2;",recamaras:"1 Recámara",banio:"1 Baños",estacionamiento:"1 Lugar E.",balcon:"Balcón",plano:"comercio-plano-303.jpg"}},roof1:{caracteristicas:{metros:"46.7 m&sup2;",plano:"comercio-plano-roof_1.jpg"}},roof2:{caracteristicas:{metros:"43.8 m&sup2;",plano:"comercio-plano-roof_2.jpg"}}},beistegui:{depa101:{caracteristicas:{metros:"168.2 m&sup2;",recamaras:"2 Recámaras",banio:"2.5 Baños",estacionamiento:"1 Lugar E.",terraza:"Terraza",balcon:"Balcón",plano:"beistegui-plano-101.jpg"}},depa102:{caracteristicas:{metros:"221.7 m&sup2;",recamaras:"3 Recámaras",banio:"3.5 Baños",estacionamiento:"3 Lugares E.",terraza:"Terraza",balcon:"Balcón",plano:"beistegui-plano-102.jpg"}},depa201:{caracteristicas:{metros:"129.3 m&sup2;",recamaras:"2 Recámaras",banio:"2.5 Baños",estacionamiento:"1 Lugar E.",balcon:"Balcón",plano:"beistegui-plano-201.jpg"}},depa202:{caracteristicas:{metros:"188.0 m&sup2;",recamaras:"3 Recámaras",banio:"3.5 Baños",estacionamiento:"3 Lugares E.",balcon:"Balcón",plano:"beistegui-plano-202.jpg"}},depa301:{caracteristicas:{metros:"129.3 m&sup2;",recamaras:"2 Recámaras",banio:"2.5 Baños",estacionamiento:"1 Lugar E.",balcon:"Balcón",plano:"beistegui-plano-301.jpg"}},depa302:{caracteristicas:{metros:"188.0 m&sup2;",recamaras:"3 Recámaras",banio:"3.5 Baños",estacionamiento:"3 Lugares E.",balcon:"Balcón",plano:"beistegui-plano-302.jpg"}},depa401:{caracteristicas:{metros:"179.8 m&sup2;",recamaras:"2 Recámaras",banio:"2.5 Baños",estacionamiento:"2 Lugares E.",roof:"Roof Privado",balcon:"Balcón",plano:"beistegui-plano-401.jpg"}},depa402:{caracteristicas:{metros:"233.4 m&sup2;",recamaras:"3 Recámaras",banio:"3.5 Baños",estacionamiento:"3 Lugares E.",roof:"Roof Privado",balcon:"Balcón",plano:"beistegui-plano-402.jpg"}}},coyoacan:{tipoa:{caracteristicas:{metros:"78.14 - 98.59 m&sup2;",recamaras:"1 - 2 Recámaras",banio:"1 - 2 Baños",estacionamiento:"1 - 2 Lugares Estacionamiento",balcon:"Con Opción",plano:"coyoacan-plano-tipo-a.jpg"}},tipob:{caracteristicas:{metros:"67.5 - 128.52 m&sup2",recamaras:"1 Recámara",banio:"1 Baño",estacionamiento:"1 Lugar Estacionamiento",terraza:"Con Opción",roof:"Privado con Opción",plano:"coyoacan-plano-tipo-b.jpg"}},tipoc:{caracteristicas:{metros:"81.1 - 89.67 m&sup2",recamaras:"1 - 2 Recámaras",banio:"1 - 2 Baños",estacionamiento:"1 - 2  Lugares Estacionamiento",balcon:"Con Opción",plano:"coyoacan-plano-tipo-c.jpg"}},tipod:{caracteristicas:{metros:"71.46 - 137.77 m&sup2",recamaras:"1 Recámara",banio:"1 Baño",estacionamiento:"1 - 2  Lugares Estacionamiento",terraza:"Con Opción",roof:"Privado con Opción",plano:"coyoacan-plano-tipo-d.jpg"}},tipoe:{caracteristicas:{metros:"85.91 - 153.77 m&sup2",recamaras:"2 Recámaras",banio:"2 - 2.5 Baños",estacionamiento:"1 - 2  Lugares Estacionamiento",balcon:"Con Opción",roof:"Privado con Opción",plano:"coyoacan-plano-tipo-e.jpg"}},tipof:{caracteristicas:{metros:"67.5 - 129.23 m&sup2",recamaras:"1 Recámara",banio:"1 Baño",estacionamiento:"1 Lugar Estacionamiento",terraza:"Con Opción",roof:"Privado con Opción",plano:"coyoacan-plano-tipo-f.jpg"}},roof:{caracteristicas:{metros:"49.3 m&sup2",plano:"coyoacan-plano-rg.jpg"}}}}}),departamentos_json=JSON.parse(departamentos_text),lista_de_caracteristicas=document.querySelector(".department-icons"),activar_elemento=function(e){for(var a=e.parentNode.children.length,r=e.parentNode.children,t=0;t<a;t++)r[t].classList.contains("active")&&r[t].classList.remove("active"),e.classList.add("active")},actualizar_caracteristicas=function(e,a){var r=document.querySelector(".icons-list"),t=document.querySelector(".department-img img"),o=e.dataset.id,i=departamentos_json.departamentos[a][o],n="";n=caracteristicas(o,a),lista_de_caracteristicas.removeChild(r),lista_de_caracteristicas.appendChild(n),activar_elemento(e),t.src="/img/vre/"+a+"/"+i.caracteristicas.plano},caracteristicas=function(e,a){var r=departamentos_json.departamentos[a],t=r[e].caracteristicas,o=document.createElement("ul");o.className="icons-list";for(var i in t)if("plano"!==i){var n=document.createElement("li"),s=document.createElement("img"),c=document.createElement("p");n.className="list-item",s.src="/img/vre/"+i+".png",c.innerHTML=t[i],n.appendChild(s),n.appendChild(c),o.appendChild(n)}return 1===o.children.length?(o.classList.add("icons-center"),o):o};!function(){var e=$(".home-apartments-carousel");e.owlCarousel({loop:!0,nav:!0,dots:!0,navText:['<div class="home-apartments-carousel-navigation arrow-left"></div>','<div class="home-apartments-carousel-navigation arrow-right"></div>'],margin:0,autoWidth:!0,center:!0,responsive:{0:{items:1},700:{items:1},880:{items:1},1e3:{items:1}}}),e.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='home-apartments-carousel-controls'></div>")})}();var homeBlogCarousel=$(".home-blog-carousel");homeBlogCarousel.owlCarousel({autoplay:!0,autoplayTimeout:3e3,loop:!0,nav:!0,dots:!0,navText:['<div class="home-blog-carousel-navigation arrow-left"></div>','<div class="home-blog-carousel-navigation arrow-right"></div>'],margin:0,autoWidth:!1,animateOut:"fadeOut",mouseDrag:!1,touchDrag:!1,center:!0,responsive:{0:{items:1},700:{items:1},880:{items:1},1e3:{items:1}}}),homeBlogCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='home-blog-carousel-controls'></div>")}),$(function(){function e(e){e.val().length>0?e.addClass("has-value"):e.removeClass("has-value")}$(".form-control").each(function(){e($(this))}),$(".form-control").on("focusout",function(){e($(this))})});var last_known_scroll_position=0,ticking=!1,setNav=document.querySelector(".nav");doSomething(),window.addEventListener("scroll",function(e){last_known_scroll_position=e.view?e.view.pageYOffset:window.scrollY,ticking||window.requestAnimationFrame(function(){doSomething(last_known_scroll_position),ticking=!1}),ticking=!0}),window.addEventListener("click",function(e){e.target.dataset.hasOwnProperty("attribute")||hideMenu()});var showHamburger=document.querySelector("#hamburgerMenu");showHamburger.addEventListener("touchstart",function(e){e.preventDefault(),showMenu()});var hideHamburger=document.querySelector("#hideHamburger");hideHamburger.addEventListener("touchstart",function(e){e.preventDefault(),hideMenu()}),showHamburger.addEventListener("click",function(e){e.preventDefault(),showMenu()}),hideHamburger.addEventListener("click",function(e){e.preventDefault(),hideMenu()}),function(e){function a(e){e.val()?(localStorage.setItem("vacante",e.val()),window.location.href="/unete-al-equipo"):alertify.error("Es necesario seleccionar una vacante.")}function r(){var a=e("#selected-vacancie").val().length,r=e('select[name="tipoVacante"][required]').val(),t=e('input[name="nombre"]').val().length,o=e('input[name="apellidos"]').val().length,i=e('input[name="curriculum"]').val().length,n=e('select[name="nivelEstudios"]').val(),s=e('input[name="correoElectronico"]').val().length;return a>=1&&""!==r&&t>=1&&o>=1&&i>=1&&""!==n&&s>=1}function t(){var a=new FormData(document.getElementById("form-cv"));e.ajax({type:"POST",url:"https://getmore.mx/vre/envio-cv.php",data:a,processData:!1,contentType:!1,cache:!1}).done(function(){document.getElementById("form-cv").reset(),alertify.success("Gracias, nos pondremos en contacto contigo.")})}if("/seleccionar-vacante.html"===window.location.pathname||"/seleccionar-vacante"===window.location.pathname){var o=e("#js-btnSiguiente"),i=e("#js-listVacantes");o.on("click",function(e){e.preventDefault(),a(i)})}if("/unete-al-equipo.html"===window.location.pathname||"/unete-al-equipo"===window.location.pathname){var n=e("#js-enviarVacante"),s=e("#selected-vacancie"),c=localStorage.getItem("vacante");s.val(c).change(),n.on("click",function(e){e.preventDefault(),r()?t():alertify.error("Es necesario llenar todos los campos y adjuntar un archivo.")})}}(jQuery);