module.exports = function () {

  //begin bottom line in article
  $(window).scroll(function(){
    var target = $('#article-bottom');
    var offset = $(target).offset(); //отступы до целевого блока
    var winHeight = $(window).height(); //высота экрана

    if ($(this).scrollTop() > offset.top - winHeight + 250) {
      $(target).addClass('active');
    }
  });
  //end bottom line in article

};