$(document).ready(function(){
	Parallax();
	Menu();
});


function Parallax() {
	var $window = $(window); 

	$('section[data-type="background"]').each(function(){
		var $bgobj = $(this); 
		$(window).scroll(function() {
		var yPos = -($window.scrollTop() / $bgobj.data('speed'));
		// Put together our final background position
		var coords = '50% '+ yPos + 'px';
		// Move the background
		$bgobj.css({ backgroundPosition: coords });
		});
	});
}

function Menu() {
	$('.menu').on('click', function() {
		$(this).toggleClass('menu on');
		$(this).parent().parent().find('.bar2').slideToggle();
		});
}