$(function(){
	var design = $(".design").not(".evaluate, .prototype");
	var prototype = $(".prototype").not(".evaluate, .design");
	var evaluate = $(".evaluate").not(".design, .prototype");
	var me = $(".me");

	design.on("mouseover", function(){
		design.attr("transform", "translate(-40,-40)");
		prototype.attr("opacity", ".3");
		evaluate.attr("opacity", ".3");
	});
	design.on("mouseout", function(){
		$(".design").attr("transform", "translate(0,0)");
		prototype.attr("opacity", "1");
		evaluate.attr("opacity", "1");
	});
	prototype.on("mouseover", function(){
		$(".prototype").attr("transform", "translate(40,-40)");
		design.attr("opacity", ".3");
		evaluate.attr("opacity", ".3");
	});
	prototype.on("mouseout", function(){
		$(".prototype").attr("transform", "translate(0,0)");
		design.attr("opacity", "1");
		evaluate.attr("opacity", "1");
	});
	evaluate.on("mouseover", function(){
		$(".evaluate").attr("transform", "translate(0,40)");
		prototype.attr("opacity", ".3");
		design.attr("opacity", ".3");
	});
	evaluate.on("mouseout", function(){
		$(".evaluate").attr("transform", "translate(0,0)");
		prototype.attr("opacity", "1");
		design.attr("opacity", "1");
	});
	me.on("mouseover", function(){
		$(".me").attr("transform", "scale(1.1)");
		$("html").css({"background-color":"darkgrey"});
		design.attr("opacity", ".3");
		prototype.attr("opacity", ".3");
		evaluate.attr("opacity", ".3");
	});
	me.on("mouseout", function(){
		$(".me").attr("transform", "scale(1)");
		$("html").css({"background-color":"#fafafa"});
		design.attr("opacity", "1");
		prototype.attr("opacity", "1");
		evaluate.attr("opacity", "1");
	});

	d3.selectAll("g").on("mouseover", function(){
		var which = d3.select(this);
		setTimeout(function(){which.raise();d3.select(".me").raise();}, 200);
		d3.select(this).selectAll("*").style("mix-blend-mode", "normal");
	});
	d3.selectAll("g").on("mouseout", function(){
		d3.select(this).selectAll("*").style("mix-blend-mode", "darken");
		d3.select(".me").selectAll("*").style("mix-blend-mode", "normal");
		d3.select(".me").raise();
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

	document.addEventListener('DOMContentLoaded', () => {

	  // Get all "navbar-burger" elements
	  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

	  // Check if there are any navbar burgers
	  if ($navbarBurgers.length > 0) {

	    // Add a click event on each of them
	    $navbarBurgers.forEach( el => {
	      el.addEventListener('click', () => {

	        // Get the target from the "data-target" attribute
	        const target = el.dataset.target;
	        const $target = document.getElementById(target);

	        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
	        el.classList.toggle('is-active');
	        $target.classList.toggle('is-active');

	      });
	    });
	  }

	});
});