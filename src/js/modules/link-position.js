module.exports = function () {

  //begin link position article.html
  function linkPosition() {
    var section = $('#article-top'); //верхняя секция
    var link = $('#article-top__all-articles'); //ссылка fixed
    var offset = $(section).offset(); //отступы верхней секции
    var top = offset.top; //расстояние до верха от верхней секции
    var height = section.outerHeight(); //высота верхней секции
    var res = top + height - '143';
    $(link).css('top', res);
  }

  if ($('#article-top__all-articles').length) {
    $(window).on('resize', linkPosition);
    $(document).ready(linkPosition);
  }
  //end link position article.html

  //begin link position vacancy.html
  function linkPositionVac() {
    var section = $('#vacancy-top'); //верхняя секция
    var link = $('#vacancy-top__all-vacancy'); //ссылка fixed
    var offset = $(section).offset(); //отступы верхней секции
    var top = offset.top; //расстояние до верха от верхней секции
    var height = section.outerHeight(); //высота верхней секции
    var res = top + height - '200';
    $(link).css('top', res);
  }

  if ($('#vacancy-top__all-vacancy').length) {
    $(window).on('resize', linkPositionVac);
    $(document).ready(linkPositionVac);
  }
  //end link position vacancy.html

};