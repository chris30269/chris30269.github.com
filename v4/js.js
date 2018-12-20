$(function(){
	var design = $(".design").not(".evaluate, .prototype");
	var prototype = $(".prototype").not(".evaluate, .design");
	var evaluate = $(".evaluate").not(".design, .prototype");
	var me = $(".me");

	design.on("mouseenter touchstart", function(){
		$(".design").attr("transform", "translate(-20,-20)");
		$("html").css("background-color", "rgba(255,242,0,.3)");
	});
	design.on("mouseout touchend", function(){
		$(".design").attr("transform", "translate(0,0)");
		$("html").css("background-color", "#fafafa");
	});
	prototype.on("mouseenter touchstart", function(){
		$(".prototype").attr("transform", "translate(20,-20)");
		$("html").css("background-color", "rgba(236, 0, 140, .3)");
	});
	prototype.on("mouseout touchend", function(){
		$(".prototype").attr("transform", "translate(0,0)");
		$("html").css("background-color", "#fafafa");
	});
	evaluate.on("mouseenter touchstart", function(){
		$(".evaluate").attr("transform", "translate(0,20)");
		$("html").css("background-color", "rgba(0, 174, 239, .3)");
	});
	evaluate.on("mouseout touchend", function(){
		$(".evaluate").attr("transform", "translate(0,0)");
		$("html").css("background-color", "#fafafa");
	});
	me.on("mouseenter touchstart", function(){
		$(".me").attr("transform", "scale(1.3)");
		$("html").css("background-color", "#fafafa");
	});
	me.on("mouseout touchend", function(){
		$(".me").attr("transform", "scale(1)");
		//$("html").css("background-color", "#fafafa");
	});
	// $("html").on("mouseenter touchstart", function(){
	// 	$("html").css("background-color", "#fafafa");
	// });
});