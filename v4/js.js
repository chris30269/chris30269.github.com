$(function(){
	var design = $(".design").not(".evaluate, .prototype");
	var prototype = $(".prototype").not(".evaluate, .design");
	var evaluate = $(".evaluate").not(".design, .prototype");
	var me = $(".me");

	design.on("mouseenter touchstart", function(){
		design.attr("transform", "translate(-40,-40)");
		// prototype.attr("opacity", ".5");
		// evaluate.attr("opacity", ".5");
	});
	design.on("mouseout touchend", function(){
		$(".design").attr("transform", "translate(0,0)");
		resetOpacities(design, prototype, evaluate);
	});
	prototype.on("mouseenter touchstart", function(){
		$(".prototype").attr("transform", "translate(40,-40)");
		// design.attr("opacity", ".5");
		// evaluate.attr("opacity", ".5");
	});
	prototype.on("mouseout touchend", function(){
		$(".prototype").attr("transform", "translate(0,0)");
		resetOpacities(design, prototype, evaluate);
	});
	evaluate.on("mouseenter touchstart", function(){
		$(".evaluate").attr("transform", "translate(0,40)");
		// prototype.attr("opacity", ".5");
		// design.attr("opacity", ".5");
	});
	evaluate.on("mouseout touchend", function(){
		$(".evaluate").attr("transform", "translate(0,0)");
		resetOpacities(design, prototype, evaluate);
	});
	me.on("mouseenter touchstart", function(){
		$(".me").attr("transform", "scale(1.1)");
	});
	me.on("mouseout touchend", function(){
		$(".me").attr("transform", "scale(1)");
	});

	design.on("click tap", function(){
		// design.attr("transform", "translate(-40,-40)");
		prototype.css({"transform":"translate(170vw, -230vh) rotate(110deg)"});
		evaluate.css({"transform":"translate(0, 230vh) rotate(110deg)"});
		me.css({"opacity":"0"});
		$("html").css({"background-color":"rgb(255, 242, 0)"});
		setTimeout(function(){window.location.href = "design.html";}, 700);
	});
	prototype.on("click tap", function(){
		// design.attr("transform", "translate(-40,-40)");
		design.css({"transform":"translate(-170vw, -230vh) rotate(180deg)"});
		evaluate.css({"transform":"translate(0, 230vh) rotate(110deg)"});
		me.css({"opacity":"0"});
		$("html").css({"background-color":"rgb(236, 0, 140)"});
		setTimeout(function(){window.location.href = "prototype.html";}, 700);
	});
	evaluate.on("click tap", function(){
		// design.attr("transform", "translate(-40,-40)");
		design.css({"transform":"translate(-170vw, -230vh) rotate(180deg)"});
		prototype.css({"transform":"translate(170vw, -230vh) rotate(110deg)"});
		me.css({"opacity":"0"});
		$("html").css({"background-color":"rgb(0, 174, 239)"});
		setTimeout(function(){window.location.href = "evaluate.html";}, 700);
	});
	me.on("click tap", function(){
		design.css({"transform":"translate(-170vw, -230vh) rotate(180deg)"});
		prototype.css({"transform":"translate(170vw, -230vh) rotate(110deg)"});
		evaluate.css({"transform":"translate(0, 230vh) rotate(110deg)"});
		$("html").css({"background-color":"rgb(0, 0, 0)"});
		setTimeout(function(){window.location.href = "me.html";}, 700);
	});
});