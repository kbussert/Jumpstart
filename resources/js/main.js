$(document).ready(function(){
  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    draggable: false,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });
});

var userScrollDistance = 0;
$(window).scroll(function(){
  var topScroll = $(this).scrollTop();
  if(topScroll - userScrollDistance > 50){
    var navHeight = $('.navbar').css('height');
    $('.navbar').animate({top: '-' + navHeight}, 150);
    userScrollDistance = topScroll;
  }
  else if (userScrollDistance - topScroll > 50) {
    $('.navbar').animate({top: '0px'}, 150);
    userScrollDistance = topScroll;
  }
});
