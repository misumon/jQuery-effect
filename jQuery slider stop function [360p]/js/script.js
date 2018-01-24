$(document).ready(function(){
	$("#slide").click(function(){
		$("#first").slideUp(2000);
	});
	
	$("#stop").click(function(){
		$("#first").stop(2000);
	});
});