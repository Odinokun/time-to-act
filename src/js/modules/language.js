module.exports = function () {

  //begin language
  // $('.language__btn').on('click', function () {
  //   var lang = $(this).siblings('.language__list');
  //   $(lang).children('.language__item:not(.active)').slideToggle();
  // });

  $('.language').on('mouseenter', function () {
    var lang = $(this).children('.language__list');
    $(lang).children('.language__item:not(.active)').slideDown();
  });
  $('.language').on('mouseleave', function () {
    var lang = $(this).children('.language__list');
    $(lang).children('.language__item:not(.active)').slideUp();
  });


  $('.language__item').on('click', function () {
    var lang = $(this).parents('.language__list');
    $(lang).children('.language__item').removeClass('active');
    $(this).addClass('active');
    $('.language__item:not(.active)').slideUp(0);
  });
  //end language

};