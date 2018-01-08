// Prevent scrolling
document.body.addEventListener('touchstart', function(e){
	// allow clicks on links within the moveable area
	if($(e.target).is('a, iframe')) {
		return true;
	}
	e.preventDefault();
});


document.body.addEventListener('touchmove', function(e){
	e.preventDefault();
});
