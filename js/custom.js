$(window).on('load resize', function () {
  if ($(window).width() >= 992)
  {  
  resizeGallery();
  }
  else
  {
    $('.project-sub').css({'height':'auto'});
  }
  });

  function resizeGallery()
  {
  var projectMainWidth = $('.project-main').width();
  var projectSubWidth = $('.project-sub').width();
  projectSubWidth = projectSubWidth + 16;
  $('.project-main').css({'min-height':projectMainWidth+'px'});
  $('.project-sub').css({'min-height':projectSubWidth+'px'});
  }