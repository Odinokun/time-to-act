module.exports = function () {

  //begin language
  $('.language__btn').on('click', function () {
    $('.language__item:not(.active)').slideToggle();
  });

  $('.language__item').on('click', function () {
    $('.language__item').removeClass('active');
    $(this).addClass('active');
    $('.language__item:not(.active)').slideUp(0);
  });
  //end language

};