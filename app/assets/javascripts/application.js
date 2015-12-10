// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$( document ).ready(function(){

	$(window).scroll(function(){

		var wScroll = $(this).scrollTop();

		// $('.right-doughnut').css({
		// 	'transform' : 'translate('+ wScroll /6+'%, 0px)'
		// });

		// $('.left-doughnut').css({
		// 	'transform' : 'translate(-'+ wScroll /6+'%, 0px)'
		// });

		$('.bottom-doughnut').css({
			'transform' : 'translate(-50%, '+ wScroll /8+'%)'
		});
	});
	$(".button-collapse").sideNav();
});