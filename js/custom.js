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

/*Keep divs on Project Gallery Square at all times width = height*/
function resizeGallery(){
  var projectMainWidth = $('.project-main').width();
  var projectSubWidth = $('.project-sub').width();
  var portFolioBox = $('.portfolio-box').width();
  projectSubWidth = projectSubWidth + 16;
  $('.project-main').css({'min-height':projectMainWidth+'px'});
  $('.project-sub').css({'min-height':projectSubWidth+'px'});
  //$('.portfolio-box').css({'min-height':portFolioBox+'px'});
}

function goToSlide(number) {
  $("#carousel").carousel(number);
}

/* Show || Hide sticky footer when scrolled to wondow.height = var footerOffHeight*/
var windowHeight = $(window).height();
var footerOffHeight = windowHeight * .30;
var footerHeight = 90; 
var addextraheight = $('body').height() + footerHeight; 

$(window).on('scroll', function (){
    if(window.pageYOffset > footerOffHeight)
    {
      $('.footer').css('height','90px');
      $('body').css({'height':addextraheight+'px'});
    }
    else{
      $('.footer').css('height','0');
    }
});



