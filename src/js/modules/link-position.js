module.exports = function () {

  //begin link position
  function linkPosition() {
    var section = $('#article-top'); //верхняя секция
    var link = $('#article-top__all-articles'); //ссылка fixed
    var offset = $(section).offset(); //отступы верхней секции
    var top = offset.top; //расстояние до верха от верхней секции
    var height = section.outerHeight(); //высота верхней секции
    var res = top + height - '143';

    $(link).css('top', res);
  }

  $(window).on('resize', linkPosition);
  $(document).ready(linkPosition);

  //end link position

};