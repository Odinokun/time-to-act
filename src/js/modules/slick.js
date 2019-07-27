module.exports = function() {

  // begin Slick slider

  $('#index-top__slider').slick({
    dots: true,
    arrows:false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    cssEase: 'linear'
  });




  // отображаем общее кол-во слайдов
  $('#index-reviews__slider').on('init', function (event, slick) {
    var allSlide = slick.slideCount;
    $("#counter-all").html(allSlide);
  });
  // отображаем текущий слайд в счетчике
  $('#index-reviews__slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    var curSlide = currentSlide + 1;
    $("#counter-tab").html(curSlide);
  });
  // инициализируем слайдер
  $('#index-reviews__slider').slick({
    arrows: true,
    fade: false,
    autoplay: false,
    cssEase: 'linear',
    slidesToShow: 2,
    infinity:false,
    slidesToScroll: 1,
    dots: false,
    adaptiveHeight: true,
    dotsClass: 'custom_paging'
  });

  // end Slick slider

};