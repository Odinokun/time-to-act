module.exports = function() {

  // begin filter reset btn
  $('.jobs-filter__label input').on('click', function() {
    var checkedNum = $('.jobs-filter__label input:checked').length;

    if (checkedNum > 0) {
        $('.jobs-filter__reset').slideDown();
    }
    else {
        $('.jobs-filter__reset').slideUp();
    }
  });

  $('.jobs-filter__reset').on('click', function() {
    $(this).slideUp();
  });
  // end filter reset btn

};