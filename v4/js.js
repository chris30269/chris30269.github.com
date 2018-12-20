$(function(){
	var design = $(".design").not(".evaluate, .prototype");
	var prototype = $(".prototype").not(".evaluate, .design");
	var evaluate = $(".evaluate").not(".design, .prototype");
	var me = $(".me");

	design.on("mouseenter touchstart", function(){
		design.attr("transform", "translate(-40,-40)");
		prototype.attr("opacity", ".5");
		evaluate.attr("opacity", ".5");
	});
	design.on("mouseout touchend", function(){
		$(".design").attr("transform", "translate(0,0)");
		resetOpacities(design, prototype, evaluate);
	});
	prototype.on("mouseenter touchstart", function(){
		$(".prototype").attr("transform", "translate(40,-40)");
		design.attr("opacity", ".5");
		evaluate.attr("opacity", ".5");
	});
	prototype.on("mouseout touchend", function(){
		$(".prototype").attr("transform", "translate(0,0)");
		resetOpacities(design, prototype, evaluate);
	});
	evaluate.on("mouseenter touchstart", function(){
		$(".evaluate").attr("transform", "translate(0,40)");
		prototype.attr("opacity", ".5");
		design.attr("opacity", ".5");
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
});

function resetOpacities (design, prototype, evaluate) {
	design.attr("opacity", "1");
	prototype.attr("opacity", "1");
	evaluate.attr("opacity", "1");
}