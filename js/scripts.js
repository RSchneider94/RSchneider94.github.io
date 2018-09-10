$(document).ready(function() {
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
  if(myWorkList.length > 0) {
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
  } else {
    $('#portfolio-thumbs').append('<h3>Available Soon</h3>');
  }

  // Caption On Hover
  $('.portfolio-caption-container').mouseenter(function() {
    $('.portfolio-caption-title', this).show();
  }).mouseleave(function() {
    $('.portfolio-caption-title', this).hide();
  });

});