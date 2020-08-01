var tabletWidth = 1365;
var screenWidth = window.innerWidth;

function doResize() {
  if (screenWidth <= tabletWidth) {
  $('.pets__slider-content').slick({
    variableWidth: true,
    appendArrows: $('.pets__slider'),
    centerMode: true
  });
}
  else {
    $('.pets__slider-content').slick('unslick');
  }
}

$(document).ready(function(){
  doResize();
  $(window).on('resize', doResize);
});


