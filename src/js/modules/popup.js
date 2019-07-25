module.exports = function() {

  // begin popup open
  $('.popup-open').on('click', function(e) {
    e.preventDefault();
    $('body').addClass('no-scroll');
    $('.popup__layer').fadeIn();

    var val = $(this).attr('data-popup');
    $('#' + val).fadeIn();
  });
  // end popup open

  // begin popup close
  $('.popup__layer, .popup__close, .btn__close').on('click', function() {
    $('body').removeClass('no-scroll');
    $('.popup, .popup__layer').fadeOut();
  });
  // end popup close

};