module.exports = function () {

  //begin article-pic
  $(window).scroll(function(){
    if ($(window).width() >= 768) {
      if ($(this).scrollTop() > 50) {
        $('#article-pic, #article-top__all-articles').addClass('active');
      } else {
        $('#article-pic, #article-top__all-articles').removeClass('active');
      }
    }
  });
  //end article-pic

};