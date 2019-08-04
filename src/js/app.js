$(function() {

  // begin SVG for IE
  require('./modules/svg4everybody')();

  // begin language
  require('./modules/language')();

  // begin menu
  require('./modules/menu')();

  // begin bottom line
  require('./modules/bottom-line')();

  // begin article pic
  require('./modules/article-pic')();

  // begin link position
  require('./modules/link-position')();

  // begin Slick slider
  require('./modules/slick')();

  // begin Popup
  require('./modules/popup')();

  // begin header
  require('./modules/header')();

  // begin filter rest btn
  require('./modules/filter-reset')();

  // begin Animate.css
  //РАБОТАЕТ ТОЛЬКО С JQUERY < 3.0.0 !!!!!!!!!!!!!!!!!!
  require('./modules/waypoints')();
  require('./modules/animateCss')();

  // begin scroll
  require('./modules/scroll')();

  // begin gsap social
  require('./modules/gsap')();

  // begin preloader
  require('./modules/preloader')();
});