$(function(){
	// console.log("hi");
	init();

	var today=new Date();
	var h=today.getHours();
	if (h > 12){
		h=h-12;
		var pm = " PM";
	}
	else
		var pm = " AM";
	var m=today.getMinutes();
	if (m<10)
		m="0"+m;
	if (today.getSeconds()%2 > 0){
		var colon = ":";
	}
	else
		var colon = " ";
	$("#time").html(""+h+colon+m+pm);
	$("#time").removeClass("blurOn");
	window.setInterval(function(){
		var today=new Date();
		var h=today.getHours();
		if (h > 12){
			h=h-12;
			var pm = " PM";
		}
		else
			var pm = " AM";
		if(h==12)
			var pm = " PM"
		var m=today.getMinutes();
		if (m<10)
			m="0"+m;
		if (today.getSeconds()%2 > 0){
			var colon = ":";
		}
		else
			var colon = " ";
		$("#time").html(""+h+colon+m+pm);
	},1000);

	setTimeout(function(){
		console.log("reminder overlay");
		$("#main").addClass("blurOn");
		$("#reminder").addClass("overlayVisible");
	}, 6000);
	setTimeout(function(){
		console.log("takeNow overlay");
		if(!$("#main").hasClass("blurOn")){
			$("#main").addClass("blurOn");
		}
		$("#reminder").removeClass("overlayVisible");
		$("#takeNow").addClass("overlayVisible");
	}, 9000);

	$("#video").on("click touchup", function(e){
		//play video
		e.stopPropagation();
		// console.log("video");
		$("#main").load("video.html", function(){toggleOverlay("refill");init();});
	});
});

function toggleOverlay(overlay){
	// $("#"+overlay).css("opacity", 1);
	$("#main").toggleClass("blurOn");
	$("#"+overlay).toggleClass("overlayVisible");
}

function loadPage(page){
	$("#main").toggleClass("blurOn");
	// $.get(
	// 	page,
	// 	function(data){
	// 		//console.log(data);
	// 		$("#main").replaceWith(data);
	// 		init();
	// 		$("#mian").toggleClass("blurOn");
	// 	}
	// );
	page = page.replace(" ", "");
	$("#main").load(page, function(){init();$("#main").toggleClass("blurOn");});
}

function init(){
	$(".button.large").on("click touchup", function(){
		//console.log($(this).html());
		loadPage($(this).html()+".html");
	});

	$(".overlay").on('click touchup', function(){
		//console.log("id: "+$(this).attr("id"));
		toggleOverlay(""+$(this).attr("id"));
	});
	$(".save").on("click touchup", save);
	$("input, select").on("change", unsave);
	$(".person").on("click touchup", function(){
		var id = $(this).find("span").first().html();
		id = id.replace(" ", "");
		id = id.replace("...", "");
		id = "person.html #"+id;
		// console.log(id);
		$("#main").toggleClass("blurOn");
		$("#main").load(id, function(data){
			// console.log(data);
			init();
			$("#main").toggleClass("blurOn");
		});
	});
	$(".edit").on("click touchup", function(){
		if($("#goBack").children().eq(1).html() == "Meds" || $("#goBack").children().eq(1).html() == "Old Meds"){
			// var content = $("td").eq(1).children().first().html();
			// $("td").eq(1).html("<input type='text' value='"+content+"' />");
			var content = $("td").eq(2).html();
			$("td").eq(2).html("<input type='text' value='"+content+"' />");
			var content = $("td").eq(3).html();
			$("td").eq(3).html("<input type='text' value='"+content+"' />");
			var content = $("td").eq(4).html();
			$("td").eq(4).html("<input type='text' value='"+content+"' />");
		}
		else{
			var content = $("td").eq(1).children().first().html();
			$("td").eq(1).html("<input type='text' value='"+content+"' />");
			var content = $("td").eq(2).html();
			$("td").eq(2).html("<input type='text' value='"+content+"' />");
			var content = $("td").eq(3).html();
			$("td").eq(3).html("<input type='text' value='"+content+"' />");
			//var content = $("td").eq(4).html();
			$("td").eq(4).html("<select><option>Tier 1</option><option>Tier 2</option><option>Tier 3</option></select>");
		}		
		var it = $(this);
		it.off();
		it.html("Save").addClass("save").removeClass("edit");
		init();
	});
	$(".call").on("click touchup", function(){
		var name = $("td").eq(1).children().first().html();
		var number = $("td").eq(3).html();
		var pic = $(".person.detail img").first().attr("src");
		$("#dialing .person img").attr("src", pic);
		$("#who").html(name);

		$("#main").removeClass("open").addClass("close");
		$("#dialing").removeClass("close").addClass("open");
	});
	$(".refill").on('click touchup', function(){toggleOverlay('refill');});
	$("#homeButton").on("click touchup", function(){
		$("#main").load("home.html", function(){init();$("#main").removeClass("blurOn");});
		$(".overlay").removeClass("overlayVisible");
		$("#time").removeClass("blurOn");
	});
	$("#powerButton").on("click touchup", function(){
		$("html").addClass("blurOn");
		location.reload();
	});
	$(".dismiss").on("click touchup", function(){
		loadPage("home.html");
	});
}

function save(){
	$("#main").toggleClass("blurOn");
	var it = $(this);
	setTimeout(function(){it.addClass("saved");} ,500);
	if($("#goBack").children().eq(1).html() == "Contacts"){
		// console.log("on detail page");
		setTimeout(function(){
			it.removeClass("save").removeClass("saved").addClass("edit");
			var content = $("option:selected").html();
			$("td").eq(4).html(content);
			var content = $("td input").eq(2).val();
			$("td").eq(3).html(content);
			var content = $("td input").eq(1).val();
			$("td").eq(2).html(content);
			var content = $("td input").eq(0).val();
			$("td").eq(1).html("<span>"+content+"</span>");
			it.html("Edit");
			it.off();
			init();
			$("#main").removeClass("blurOn");
		}, 1500);
	}
	else if($("#goBack").children().eq(1).html() == "Meds" || $("#goBack").children().eq(1).html() ==  "Old Meds"){
		// console.log($("#goBack").children().eq(1).html());

		setTimeout(function(){
			it.removeClass("save").removeClass("saved").addClass("edit");
			var content = $("td input").eq(2).val();
			$("td").eq(4).html(content);
			var content = $("td input").eq(1).val();
			$("td").eq(3).html(content);
			var content = $("td input").eq(0).val();
			$("td").eq(2).html(content);
			// var content = $("td input").eq(0).val();
			// $("td").eq(1).html("<span>"+content+"</span>");
			it.html("Edit");
			it.off();
			init();
			$("#main").removeClass("blurOn");
		}, 1500);
	}
	else
		setTimeout(function(){$("#main").toggleClass("blurOn");it.addClass("saved");it.html("Saved")}, 1000);
}
function unsave(){
	$(".save").first().removeClass("saved").html("Save");

}