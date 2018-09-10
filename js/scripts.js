$(document).ready(function() {
  // Tooltip
  $(function () {
    $('#item1').tooltip();
  });

  // Smooth Scroll
  var $root = $('html, body');
  $('.navbar a').click(function () {
    var href = $.attr(this, 'href');
    if (href != undefined && href != '#') {
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function () {
        window.location.hash = href;
      });
    }
    return false;
  });

  // Work Section
  for (let index = 0; index < myWorkList.length; index++) {
    $('#portfolio-thumbs').append(
      '<div class="col-6 col-md-3">\
        <a class="portfolio-caption-container" href="#">\
          <img class="img-fluid" src="' + myWorkList[index].thumb +'">\
          <p class="portfolio-caption-title text-center">' + myWorkList[index].title + '</p>\
        </a>\
      </div>'
    );
  }

  // Caption On Hover
  $('.portfolio-caption-container').mouseenter(function() {
    $('.portfolio-caption-title', this).show();
  }).mouseleave(function() {
    $('.portfolio-caption-title', this).hide();
  });

  // Future Tests
  /* $(window).resize(function () { 
    var screenHeight = $(window).height();
    $("#home").css("height", screenHeight);
  });
  var screenHeight = $(window).height();
  $("#home").css("height", screenHeight); */
});

// Google Maps API
function initMap() {
  // Berlin LatLng
  var myLatLng = {lat: 52.5065133, lng: 13.1445545};
  var map = new google.maps.Map(document.getElementById('google-maps'), {
    center: myLatLng,
    zoom: 10
  });

  var myFirstMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    label: 'RS',
    title: 'Hello, Career Foundry!'
  });
}