module.exports = function() {

  // begin Animate CSS + WayPoints javaScript Plugin
  //РАБОТАЕТ ТОЛЬКО С JQUERY < 3.0.0 !!!!!!!!!!!!!!!!!!

  $(".services__item, .jobs-item, .articles-item").waypoint(function() {
    $(this).addClass("animated fadeInUp");
  }, {
    offset: "100%"
  });

  // end Animate CSS + WayPoints javaScript Plugin

};