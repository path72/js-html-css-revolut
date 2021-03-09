//###################################################### 
// DYNAMICS

$(function() {
// ********************* doc ready start ***


// nav menu mouseover init
navMenuInit();


// *********************** doc ready end ***
});

//###################################################### 
// FUNCTIONS

function navMenuInit() {
	$('.nav').last().children('li').hover(
		function() {
			$(this).children('.nav_menu').toggleClass('active');
			$(this).children('a:not(:last-child)').css({ 'color':'var(--black)' });
		},
		function() {
			$(this).children('.nav_menu').toggleClass('active');
			$(this).children('a:not(:last-child)').css({ 'color':'var(--grey)' });
		}
	);
}


