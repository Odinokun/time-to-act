module.exports = function() {

  // begin Animate CSS + WayPoints javaScript Plugin
  //РАБОТАЕТ ТОЛЬКО С JQUERY < 3.0.0 !!!!!!!!!!!!!!!!!!

  $(".services__item").waypoint(function() {
    $(this).addClass("animated fadeInLeftBig");
  }, {
    offset: "100%"
  });

  $(".jobs-item").waypoint(function() {
    $(this).addClass("animated fadeInRightBig");
  }, {
    offset: "100%"
  });

  $(".articles-item").waypoint(function() {
    $(this).addClass("animated zoomInRight");
  }, {
    offset: "100%"
  });

  // end Animate CSS + WayPoints javaScript Plugin

};