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
	// PARALLAX
	$(window).scroll(function(){
		
		var wScroll = $(this).scrollTop();

		$('#logo').css({
			'transform' : 'translate(0px, '+ wScroll /2 +'%)'
		});

		$('#foreground').css({
			'transform' : 'translate(0px, -'+ wScroll /2 +'%)'
		});	
	// DOUGHNUT GALLERY
	// Look at how far gallery is from the top of the DOM
		if(wScroll > $('.doughnutgallery').offset().top - ($(window).height() / 1.2 )){
			// What ever is inside of this, it runs a function.
			$('.doughnutgallery, .doughnuts').each(function(i){
				
				setTimeout(function(){
					$('.doughnuts').eq(i).addClass('is-showing');
				}, (700 * (Math.exp(i * 0.14))) - 700);
			});
		}
	});

	// LIGHTBOX

	$(".lightboxlink").click(function(e){
		/***variable images***/
		var image = $(e.currentTarget).data("img");
		var desc = $(e.currentTarget).data("desc");
		var title = $(e.currentTarget).data("title");
		/***add the body elements***/
		$("body").append("<div class='outerlight'><div class='innerlight'><img class='lightimg' src='"+image+"'><div class='lightword'><h1>"+title+"</h1><h2>"+desc+"</h2></div></div></div>")
		/***center the innerbox***/
			var page_height = $(window).height();
			console.log(page_height)
			var image_height = $('.lightimg').height();
			console.log(image_height)
			var image_offset = (page_height - 550)/2;
			console.log(image_offset)
			$('img.lightimg').parent().css('margin-top', image_offset);
		/***remove lightbox***/
		$("div.outerlight, div.innerlight, .lightimg").click(function(){
			$(".outerlight").remove()
		});
	});
});
