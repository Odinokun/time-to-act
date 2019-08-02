module.exports = function () {

  //begin language
  $('.language__btn').on('click', function () {
    var lang = $(this).siblings('.language__list');
    $(lang).children('.language__item:not(.active)').slideToggle();
  });

  $('.language__item').on('click', function () {
    var lang = $(this).parents('.language__list');
    $(lang).children('.language__item').removeClass('active');
    $(this).addClass('active');
    $('.language__item:not(.active)').slideUp(0);
  });
  //end language

};