module.exports = function() {

  //begin header
  $('#header__arrow').on('click', function() {
    $(this).toggleClass('active');
    $('#header-inn__right').slideToggle(200);

  });
  //end header

};