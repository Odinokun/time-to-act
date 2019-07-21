module.exports = function () {

  //begin language
  $('.burger').on('click', function () {
    $('#menu, #language').toggleClass('active');
    $('#main-wrap').toggleClass('no-scroll');
  });
  //end language

};