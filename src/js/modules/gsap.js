module.exports = function() {

  // begin gsap
  $(function (e) {
    $(".contacts-social").each(function (e, t) {
      var i = $(t);
      i.on("mousemove", function (e) {
        var t = i.outerWidth()
          , a = i.outerHeight()
          , s = i.offset().left - $(window).scrollLeft()
          , n = i.offset().top - $(window).scrollTop()
          , o = (e.clientX - s) / t
          , r = (e.clientY - n) / a
          , l = 2 * (r - .5)
          , d = (5 - 10 * o).toFixed(2)
          , c = ((10 * r - 5).toFixed(2),
        10 * l);
        TweenLite.to(i, .4, {
          scale: 1.02,
          rotationY: d,
          y: c
        })
      }),
        i.on("mouseleave", function (e) {
          TweenLite.to(i, .4, {
            scale: 1,
            rotationX: 0,
            rotationY: 0,
            y: 0
          })
        })
    })
  });
  // end gsap

};