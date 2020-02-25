$(window).on('load resize', function () {
    resizeGallery();
  });

  function resizeGallery()
  {
  var projectMainWidth = $('.project-main').width();
  var projectSubWidth = $('.project-sub').width();
  $('.project-main').css({'min-height':projectMainWidth+'px'});
  $('.project-sub').css({'min-height':projectSubWidth+'px'});
  }