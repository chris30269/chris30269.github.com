var designBackground = "hsl(324, 100%, 36.3%)";
var codeBackground = "hsl(57, 100%, 30%)";
var commBackground = "hsl(196, 100%, 36.9%)";

$(function(){
	//console.log("hi");
	var code = $(".code").not(".communication, .design");
	var design = $(".design").not(".communication, .code");
	var communication = $(".communication").not(".code, .design");
	var me = $(".communication.code.design");

	var width = window.innerWidth;
	var height = window.innerHeight;
	var dur = 1000;
	var rot = 360.0*1.5;
	// var type = dynamics.easeIn;
	var friction = 150;
	var highlightDistance = 20;

	// $("#one").on("mouseover touchstart", function(){
	// 	$("#one").css("transform", "matrix3d(-1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, -"+(width+highlightDistance)+", -"+(height-highlightDistance)+", 0, 1)");
	// });
	// $("#one").on("mouseout touchend", function(){
	// 	//make it work right for touch
	// 	$("#one").css("transform", "matrix3d(-1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, -"+width+", -"+height+", 0, 1)");
	// });
	// $("#two").on("mouseover touchstart", function(){
	// 	$("#two").css("transform", "matrix3d(-1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, -"+(height-highlightDistance)+", 0, 1)");
	// });
	// $("#two").on("mouseout touchend", function(){
	// 	$("#two").css("transform", "matrix3d(-1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, -"+height+", 0, 1)");
	// });
	// $("#three").on("mouseover touchstart", function(){
	// 	$("#three").css("transform", "matrix3d(-1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, "+(width+highlightDistance)+", -"+(height-highlightDistance)+", 0, 1)");
	// });
	// $("#three").on("mouseout touchend", function(){
	// 	$("#three").css("transform", "matrix3d(-1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, "+width+", -"+height+", 0, 1)");
	// });

	// dynamics.animate(document.querySelector('#one'), {
	//   translateX: -width,
	//   translateY: -height,
	//   rotateZ: rot
	// }, {
	//   type: type,
	//   friction: friction,
	//   duration: dur,
	//   delay: (Math.random()*500.0)
	// });

	// dynamics.animate(document.querySelector('#two'), {
	//   translateY: -height,
	//   rotateZ: rot
	// }, {
	//   type: type,
	//   friction: friction,
	//   duration: dur,
	//   delay: (Math.random()*500.0)
	// });

	// dynamics.animate(document.querySelector('#three'), {
	//   translateX: width,
	//   translateY: -height,
	//   rotateZ: rot
	// }, {
	//   type: type,
	//   friction: friction,
	//   duration: dur,
	//   delay: (Math.random()*500.0)
	// });

	code.on("mouseenter touchstart", function(){
		hover("code");
	});
	code.on("mouseout", function(){
		unHoverCode();
	});
	design.on("mouseenter touchstart", function(){
		hover("design");
	});
	design.on("mouseout", function(){
		unHoverDesign();
	});
	communication.on("mouseenter touchstart", function(){
		hover("communication");
	});
	communication.on("mouseout", function(){
		unHoverCommunication();
	});
	me.on("mouseenter touchstart", function(){
		hover("me");
	});
	me.on("mouseout", function(){
		unHoverMe();
	});
	$(".name").on("mouseenter touchstart", function(){
		hover("me");
	});
	$(".name").on("mouseout", function(){
		unHoverMe();
	});

	code.on("mouseup touchend", function(){
		loadCode();
	});
	design.on("mouseup touchend", function(){
		loadDesign();
	});
	communication.on("mouseup touchend", function(){
		loadComm();
	});
	me.add($(".name")).on("mouseup touchend", function(){
		$("svg").css("max-height", "50vh");
		$("body").css("background-color", "rgb(201,201,198)");
		$("#designContent").css("opacity", 0).css("display", "none");
		$("#communicationContent").css("opacity", 0).css("display", "none");
		$("#codeContent").css("opacity", 0).css("display", "none");
		$("#meContent").css("opacity", 0).css("display", "none");
		$(".projectContent").css("opacity", 0).css("display", "none");

		setTimeout(function(){$("#meContent").css("display", "block");$("#designContent").css("display", "none");$("#codeContent").css("display", "none");$("#communicationContent").css("display", "none");}, 300);
		setTimeout(function(){$("#meContent").css("opacity", 1);unHoverMe();rotateLogo(0);}, 500);
	});

	$(".projectButton").on("click", function(){
		if($(this).data("type") == "design") color = designBackground;
		else if($(this).data("type") == "code") color = codeBackground;
		else if($(this).data("type") == "comm") color = commBackground;
		$("body").css("background-color", color);
		var project = $(this).data("project");
		setTimeout(function(){$("#designContent").css("display", "none").css("opacity", "0");$("#codeContent").css("display", "none");$("#communicationContent").css("display", "none");$("#meContent").css("display", "none");$("body").css("background-color", "black");}, 300);
		setTimeout(function(){$("#"+project+"").css("display", "block").css("opacity", 1);}, 500, project);
	});

	$(".designLink").on("mouseenter touchstart", function(){
		$("body").css("background-color", designBackground);
		$(this).css("color", "#EC008C");
	});
	$(".designLink").on("mouseout", function(){
		$("body").css("background-color", "black");
		$(this).css("color", "");
	});
	$(".designLink").on("mouseup touchend", function(e){
		e.preventDefault();
		loadDesign();
	});

	$(".codeLink").on("mouseenter touchstart", function(){
		$("body").css("background-color", codeBackground);
		$(this).css("color", "#FFF200");
	});
	$(".codeLink").on("mouseout", function(){
		$("body").css("background-color", "black");
		$(this).css("color", "");
	});
	$(".codeLink").on("mouseup touchend", function(e){
		e.preventDefault();
		loadCode();
	});

	$(".commLink").on("mouseenter touchstart", function(){
		$("body").css("background-color", commBackground);
		$(this).css("color", "#00AEEF");
	});
	$(".commLink").on("mouseout", function(){
		$("body").css("background-color", "black");
		$(this).css("color", "");
	});
	$(".commLink").on("mouseup touchend", function(e){
		e.preventDefault();
		loadComm();
	});

	//don't put my email on blast
	var poop = 12/4;
	var boogers = 'chris'+(poop-3);
	$("#lookAtMe").attr("href", "mailto:"+boogers.substr(0,5)+"@chrisernst.me?subject=I%20want%20to%20give%20you%20money").html(boogers.substr(0,5)+"@chrisernst.me");
});

function hover(which){
	var color="";
	if(which == "communication"){
		color = commBackground;
		$(".design").not(".communication, .code").css("opacity", "0");
		$(".code").not(".communication, .design").css("opacity", "0");
		$(".design.code").not(".communication").css("opacity", "0");
		$(".communication").attr("fill", "#00AEEF");
		$(".name").css("opacity", 0);
	}
	else if(which == "design"){
		color = designBackground;
		$(".communication").not(".design, .code").css("opacity", "0");
		$(".code").not(".design, .communication").css("opacity", "0");
		$(".communication.code").not(".design").css("opacity", "0");
		$(".design").attr("fill", "#EC008C");
		$(".name").css("opacity", 0);
	}
	else if(which == "code"){
		color = codeBackground;
		$(".communication").not(".design, .code").css("opacity", "0");
		$(".design").not(".code, .communication").css("opacity", "0");
		$(".communication.design").not(".code").css("opacity", "0");
		$(".code").attr("fill", "#FFF200");
		$(".name").css("opacity", 0);
	}
	else if(which == "me"){
		color = "rgb(201,201,198)";
		$(".communication").not("#me").css("opacity", 0);
		$(".code").not("#me").css("opacity", 0);
		$(".design").not("#me").css("opacity", 0);
	}
	else{
		color = "black";
	}
	$("body").css("background-color", color);
}

function unHoverCommunication(){
	$("body").css("background-color", "black");
	$(".design").not(".communication, .code").css("opacity", "1");
	$(".code").not(".communication, .design").css("opacity", "1");
	$(".design.code").not(".communication").css("opacity", "1");
	$(".name").css("opacity", 1);
	$(".code.design.communication").attr("fill", "#363639");
	$(".communication.code").not(".design").attr("fill", "#00A651");
	$(".communication.design").not(".code").attr("fill", "#2E3192");
}
function unHoverCode(){
	$("body").css("background-color", "black");
	$(".communication").not(".design, .code").css("opacity", "1");
	$(".design").not(".code, .communication").css("opacity", "1");
	$(".communication.design").not(".code").css("opacity", "1");
	$(".name").css("opacity", 1);
	$(".code.design.communication").attr("fill", "#363639");
	$(".code.design").not(".communication").attr("fill", "#ED1C24");
	$(".code.communication").not(".design").attr("fill", "#00A651");
}
function unHoverDesign(){
	$("body").css("background-color", "black");
	$(".communication").not(".design, .code").css("opacity", "1");
	$(".code").not(".design, .communication").css("opacity", "1");
	$(".communication.code").not(".design").css("opacity", "1");
	$(".name").css("opacity", 1);
	$(".code.design.communication").attr("fill", "#363639");
	$(".design.code").not(".communication").attr("fill", "#ED1C24");
	$(".design.communication").not(".code").attr("fill", "#2E3192");
}
function unHoverMe(){
	$("body").css("background-color", "black");
	$(".communication").not("#me").css("opacity", 1);
	$(".code").not("#me").css("opacity", 1);
	$(".design").not("#me").css("opacity", 1);
	$(".name").css("opacity", 1);
}

function rotateLogo(deg){
	deg = 360+deg;
	$("svg").attr("style", "transform-origin: 50% 50%;transform:rotate("+deg+"deg);max-height:50vh;");
	// $(".name").css("transform", "rotate(-"+deg+"deg)");
	// $(".name").css("transform-origin", "50% 50%");
}

function loadDesign(){
	$("svg").css("max-height", "50vh");
	$("body").css("background-color", "#EC008C");
	$("#designContent").css("opacity", 0).css("display", "none");
	$("#communicationContent").css("opacity", 0).css("display", "none");
	$("#codeContent").css("opacity", 0).css("display", "none");
	$("#meContent").css("opacity", 0).css("display", "none");
	$(".projectContent").css("opacity", 0).css("display", "none");

	setTimeout(function(){$("#designContent").css("display", "block");$("#codeContent").css("display", "none");$("#communicationContent").css("display", "none");$("#meContent").css("display", "none");}, 300);
	setTimeout(function(){$("#designContent").css("opacity", 1);unHoverDesign();rotateLogo(305);}, 500);
}

function loadCode(){
	$("svg").css("max-height", "50vh");
	$("#designContent").css("opacity", 0).css("display", "none");
	$("#communicationContent").css("opacity", 0).css("display", "none");
	$("#codeContent").css("opacity", 0).css("display", "none");
	$("#meContent").css("opacity", 0).css("display", "none");
	$("body").css("background-color", "#FFF200");
	$(".projectContent").css("opacity", 0).css("display", "none");

	setTimeout(function(){$("#codeContent").css("display", "block");$("#designContent").css("display", "none");$("#communicationContent").css("display", "none");$("#meContent").css("display", "none");}, 300);
	setTimeout(function(){$("#codeContent").css("opacity", 1);unHoverCode();rotateLogo(55);}, 500);
}

function loadComm(){
	$("svg").css("max-height", "50vh");
	$("body").css("background-color", "#00AEEF");
	$("#designContent").css("opacity", 0).css("display", "none");
	$("#communicationContent").css("opacity", 0).css("display", "none");
	$("#codeContent").css("opacity", 0).css("display", "none");
	$("#meContent").css("opacity", 0).css("display", "none");
	$(".projectContent").css("opacity", 0).css("display", "none");

	setTimeout(function(){$("#communicationContent").css("display", "block");$("#designContent").css("display", "none");$("#codeContent").css("display", "none");$("#meContent").css("display", "none");}, 300);
	setTimeout(function(){$("#communicationContent").css("opacity", 1);unHoverCommunication();rotateLogo(0);}, 500);
}
