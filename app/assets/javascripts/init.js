(function($){
  $(function(){
	$('.materialboxed').materialbox();
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.slider').slider({full_width: true});
    // Pause slider
	$('.slider').slider('pause');
	// Start slider
	$('.slider').slider('start');
	// Next slide
	$('.slider').slider('next');
	// Previous slide
	$('.slider').slider('prev');

  }); // end of document ready
})(jQuery); // end of jQuery name space