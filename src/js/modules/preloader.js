module.exports = function() {

  // begin preloader
  //- $(window).on('load', function () {
  //-   var preloader = $('#preloader-wrap');
  //-   preloader.delay(2100).fadeOut('slow');
  //-   $('#main-wrap').removeClass('no-scroll');
  //- });

  $(document).ready(function () {
    $('#preloader-wrap').fadeOut();
    $('#main-wrap').removeClass('no-scroll');
  });
  // end preloader

};