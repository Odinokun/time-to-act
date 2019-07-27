module.exports = function() {

  // begin scroll
  $(document).ready(function () {
    $(this).scroll(
      function () {
        //указываем, новый css параметр transform в зависимости от
        // изменения скролла от верха. Делим на 6, чтобы была заметна
        // разница в прокрутке между баннерами и блоками.
        $('.why-we__left .why-we__item').css('transform', 'translateY(-' + $(document).scrollTop() / 20 + 'px)');
        $('.why-we__right .why-we__item').css('transform', 'translateY(-' + $(document).scrollTop() / 6 + 'px)');
      }
    )
  });
  // end scroll

};