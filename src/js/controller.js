var synth = new Tone.Synth().toMaster();

// listen for mouse down and up events
var mouseDown = false;
$(document).mousedown(function() {
	mouseDown = true;
}).mouseup(function() {
	mouseDown = false;
});

$(document).ready(function() {
	createHarmonicTable();
	initHexHover();

	$(".hex").on("mousedown", function() {
		synth.triggerAttack($(this).attr("id"));
	}).on("mouseup", function() {
		synth.triggerRelease();
	}).on("mouseleave", function() {
		synth.triggerRelease();
	}).on("mouseenter", function() {
		if (mouseDown) {
			synth.triggerAttack($(this).attr("id"));
		}
	});
});

