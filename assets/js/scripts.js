$(document).ready(function(){
  $('.news-list').owlCarousel({
  	items: 1,
  	mouseDrag: false,
  	loop: true,
  	rewind: false,
  	nav: true,
  	autoplay: true,
  	autoplayTimeout: 4000,
    navText: ['','']
  });
  $('.brand-slider').owlCarousel({
  	items: 4,
  	mouseDrag: false,
  	loop: true,
  	nav: true,
  	dotsEach: 1,
  })
});