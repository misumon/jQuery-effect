$(document).ready(function(){
	$(".mydiv").mouseover(function(){
		$(this).stop().animate({width:"400px"})
	});

	$(".mydiv").mouseout(function(){
		$(this).stop().animate({width:"250px"})
	});
});