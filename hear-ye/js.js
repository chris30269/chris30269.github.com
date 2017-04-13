var A = 440;
var notes = ["A", "A#/Bb", "B",     "C",     "C#/Db", "D",     "D#/Eb", "E",     "F",     "F#/Gb", "G",     "G#"];
var freqs = [440, 466.164, 493.883, 523.252, 554.366, 293.665, 311.127, 329.628, 349.228, 369.994, 391.995, 415.305];
var cents = 1200; //number of cents they heard correctly
var duration = 1; //how long to play the notes? in seconds
var intermission = .1; //how long between notes? in seconds
var lastNote = 440;
var higher = true;
var debug = true;
var bestCents;

var audioContext = new (window.AudioContext || window.webkitAudioContext)();

$(function(){
	init();
});

function playNotes(repeat){
	//place balls
	var percentDone = 1.0-(cents/1200.0);
	$("#topball").css("top", (-99+(percentDone*49)+"vh"));
	$("#topball").css("width", (100+(percentDone*50)+"vw"));
	$("#bottomball").css("bottom", (-99+(percentDone*49)+"vh"));
	$("#bottomball").css("width", (100+(percentDone*50)+"vw"));

	//color balls
	var randomColor = Math.floor(Math.random() * (360 - 0 + 1)) + 0;
	var colorString = "hsl("+(randomColor + (percentDone*360))+", 100%, 50%)";
	$("#topball").css("background-color", colorString);
	$("#bottomball").css("background-color", "hsl("+randomColor+", 100%, 50%)");

	//same or different
	//pick a starting note
	if(!repeat){
		var picker = Math.floor(Math.random() * (11 - 0 + 1)) + 0;
		var note1 = freqs[picker];
		higher = Math.round(Math.random());
		lastNote = note1;
	} else{
		var note1 = lastNote;
	}

	//pick a timbre

	//play first note
	var osc1 = audioContext.createOscillator();
	osc1.type = 'square';
	osc1.frequency.value = note1;
	osc1.connect(audioContext.destination);
	osc1.start();
	osc1.stop(audioContext.currentTime + duration);

	//play second note after delay
	var osc2 = audioContext.createOscillator();
	osc2.type = 'triangle';
	osc2.frequency.value = note1;
	if(higher<1){
		osc2.detune.value = -1*cents;
		var direction = "down";
	}
	else{
		osc2.detune.value = cents;
		var direction = "up";
	}
	osc2.connect(audioContext.destination);
	osc2.start(audioContext.currentTime + duration + intermission);
	osc2.stop(audioContext.currentTime +intermission+ duration + duration);

	//debug
	$("#cents").html(""+cents);
	$("#direction").html(""+direction);
	$("#note").html(notes[picker]);
}

function init(){
	$("#topball").on('mouseup touchup', function(){
		//top ball touch up
		if(higher){
			win();
		}
		else{
			lose();
		}
	});
	$("#bottomball").on('mouseup touchup', function(){
		//bottom ball touch up
		if(!higher){
			win();
		}
		else{
			lose();
		}
	});
	$("#replay").on('mouseup touchup', function(){
		//replay?
		playNotes(true);
	});

	//get best cents
	if(!localStorage.getItem("bestCents")){
		localStorage.setItem("bestCents", 1200);
		cents = 1200;
	}
	else{
		bestCents = localStorage.getItem("bestCents");
		cents = bestCents*3;
	}
	if(debug) cents = 1200;
	$("#bestCents").html(""+bestCents);

	//place balls

	playNotes();
}

function win(){
	console.log("correct");
	if(cents < bestCents){
		localStorage.setItem("bestCents", cents);
		$("#bestCents").html(""+cents);
	}
	cents = getNewCents("won");
	playNotes();
}

function lose(){
	cents = getNewCents("lost");
	console.log("wrong");
	playNotes();
}

function getNewCents(won){
	if(won == "won"){
		if(cents > 100) newCents = cents-100;
		else newCents = cents/2.0;
	}
	else{
		if(cents>100) newCents = cents + 200;
		else newCents = cents*1.5;
	}
	return newCents;
}