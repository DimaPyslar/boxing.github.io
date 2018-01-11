$(function() {


function heightDetect() {
  $("header").css("height", $(window).height());
  };
    heightDetect();
  $(window).resize(function() {
    heightDetect();
});

//animation
$(".zoom").animated("flipInX");
$(".left").animated("fadeInLeft");
$(".right").animated("fadeInRight");
$(".down").animated("fadeInDown");

//animation end

//adaptive menu
$(function($) {
    $('.icon').on('click', function() {
        $(this).closest('.menu').toggleClass('menu-open');
    });
});

$(".icon").click(function() {
    $(".adaptive_menu").slideToggle();
    $(".logo p").toggleClass("color");
});
//adaptive menu end


//slider 
$(document).ready(function() {
    $('.main_slider').slick({
        autoplay: true,
        autoplaySpeed: 9000,
        pauseOnHover: false,
        arrows: false
    });
});
//slider end

//smooth scroll at anchors
$(document).ready(function() {
    $('a[href^="#"]').bind("click", function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr("href")).offset().top
        }, 1000);
        e.preventDefault();
    });
    return false;
});
//smooth scroll at anchors end

//gallery
	var $container = $(".masonry-container");
$container.imagesLoaded(function () {
	$container.masonry({
		columnWidth: ".item",
		itemSelector: ".item"
	});
	$(".item").imagefill();
});

$(document).ready(function() {
	$('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 500, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
});

//gallery end

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//////send mail

$(document).ready(function() {

  //E-mail Ajax Send
  $("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Thank you!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;

  });

});
//////send mail emd


	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

//map////////////////////////////////////

$(function initMap() {

// Styles a map in night mode.
var map = new google.maps.Map(document.getElementById('map'), {
  center: {
      lat: 43.645833,
      lng: -79.522347
  },
  zoom: 16,
  styles: [{
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [{
          "saturation": 36
      }, {
          "color": "#000000"
      }, {
          "lightness": 40
      }]
  }, {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [{
          "visibility": "on"
      }, {
          "color": "#000000"
      }, {
          "lightness": 16
      }]
  }, {
      "featureType": "all",
      "elementType": "labels.icon",
      "stylers": [{
          "visibility": "off"
      }]
  }, {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [{
          "color": "#000000"
      }, {
          "lightness": 20
      }]
  }, {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [{
          "color": "#000000"
      }, {
          "lightness": 17
      }, {
          "weight": 1.2
      }]
  }, {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [{
          "color": "#000000"
      }, {
          "lightness": 20
      }]
  }, {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{
          "color": "#000000"
      }, {
          "lightness": 21
      }]
  }, {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [{
          "color": "#000000"
      }, {
          "lightness": 17
      }]
  }, {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [{
          "color": "#000000"
      }, {
          "lightness": 29
      }, {
          "weight": 0.2
      }]
  }, {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [{
          "color": "#000000"
      }, {
          "lightness": 18
      }]
  }, {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [{
          "color": "#000000"
      }, {
          "lightness": 16
      }]
  }, {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [{
          "color": "#000000"
      }, {
          "lightness": 19
      }]
  }, {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{
          "color": "#000000"
      }, {
          "lightness": 17
      }]
  }]
  //marker position
});
var marker = new google.maps.Marker({
  position: {
      lat: 43.645833,
      lng: -79.522347
  },
  map: map
});
});

//map end////////////////////////////////////

//button back to top 
var $btnTop = $('.btn-top')
$(window).on("scroll", function() {
    if ($(window).scrollTop() >= 20) {
        $btnTop.fadeIn();
    } else {
        $btnTop.fadeOut();
    }
});

$btnTop.on("click", function() {
    $("html,body").animate({
        scrollTop: 0
    }, 900)
});
//button back to top end

//preloader

  $(".loader_inner").fadeOut();
  $(".loader").delay(300).fadeOut("slow");

//preloader

