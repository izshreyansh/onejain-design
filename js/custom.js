$(function () {
  // ##################################################################
  //Fix header while scroll
  // ##################################################################
  var wind = $(window);
  wind.on("load", function () {
    var bodyScroll = wind.scrollTop(),
      navbar = $(".topbar");
    if (bodyScroll > 100) {
      navbar.addClass("fixed-header animated slideInDown");
    } else {
      navbar.removeClass("fixed-header animated slideInDown");
    }
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
      $(".topbar").addClass("fixed-header animated slideInDown");
      $(".bt-top").addClass("visible");
    } else {
      $(".topbar").removeClass("fixed-header animated slideInDown");
      $(".bt-top").removeClass("visible");
    }
  });

  //
  // Tootlip
  //
  $('[data-toggle="tooltip"]').tooltip();

  //
  // On click page scroll down
  //
  $(".topbar a.nav-link").on("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 75,
        },
        1000
      );
    event.preventDefault();
  });
});

// $(window).resize(function () {
//   if ($(window).width() <= 1024) {
//     // is mobile device
//     $(".top-navbar .navbar-collpase .navbar-nav .nav-item").click(function(){
//         $()
//     });
//   }
// });
