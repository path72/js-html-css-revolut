//###################################################### 
// DYNAMICS

$(document).ready(function() {
// ********************* doc ready start ***


// nav menu mouseover init
navMenuInit();


// *********************** doc ready end ***
});

//###################################################### 
// FUNCTIONS

function navMenuInit() {

	$('.nav').last().children('li').mouseenter(function() {
		$(this).children('.nav_menu').toggleClass('active');
		$(this).children('a:not(:last-child)').css({ 'color':'var(--black)' });
	});
	
	$('.nav').last().children('li').mouseleave(function() {
		$(this).children('.nav_menu').toggleClass('active');
		$(this).children('a:not(:last-child)').css({ 'color':'var(--grey)' });
	});
	
}


