$('#blog').hover(function(){
	colorSwitch('#ffe02e');
}, function(){
	colorSwitch('#f8ecc3');
});

$('#mind').hover(function(){
	colorSwitch('#2f946b');
}, function(){
	colorSwitch('#f8ecc3');
});

$('#molecules').hover(function(){
	colorSwitch('#c43426');
}, function(){
	colorSwitch('#f8ecc3');
});

$('#dharma').hover(function(){
	colorSwitch('#3e40a4');
}, function(){
	colorSwitch('#f8ecc3');
});

$('#erotica').hover(function(){
	colorSwitch('#f5bdab');
}, function(){
	colorSwitch('#f8ecc3');
});

$('.archive').hover(function(){
	colorSwitch('#f8ecc3#f8ecc3#f8ecc3#f8ecc3');
}, function(){
	colorSwitch('#f8ecc3');
});

$('#files').hover(function(){
	colorSwitch('#ae5225');
}, function(){
	colorSwitch('#f8ecc3');
});

$('#images').hover(function(){
	colorSwitch('#abdbe3');
}, function(){
	colorSwitch('#f8ecc3');
});

$('#video').hover(function(){
	colorSwitch('#eab676');
}, function(){
	colorSwitch('#f8ecc3');
});

function colorSwitch(color){
	$('body').css('background-color', color);
	$('#footer').css('background-color', color);
	// $('#home-nav-wrapper a').css('background-color', color);
	// $('#home-nav-wrapper a .number').css('background-color', color);
	// $('#home-nav-wrapper a .nav-title').css('background-color', color);
}
