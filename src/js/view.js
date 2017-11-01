

function initView() {
	createHarmonicTable();
	initHexHover();
	initRangeLabels();
	initActiveToolClick();
	showNotes();
}

function createHarmonicTable() {
	const NOTES = [
		[ "D#7", "G#6", "C#6", "F#5", "B4" , "E4" , "A3" , "D3" , "G2" , "C2" , "F1"  ],
		[ "C7" , "F6" , "A#5", "D#5", "G#4", "C#4", "F#3", "B2" , "E2" , "A1" , "D1"  ],
		[ "E7" , "A6" , "D6" , "G5" , "C5" , "F4" , "A#3", "D#3", "G#2", "C#2", "F#1" ],
		[ "C#7", "F#6", "B5" , "E5" , "A4" , "D4" , "G3" , "C3" , "F2" , "A#1", "D#1" ],
		[ "F7" , "A#6", "D#6", "G#5", "C#5", "F#4", "B3" , "E3" , "A2" , "D2" , "G1"  ],
		[ "D7" , "G6" , "C6" , "F5" , "A#4", "D#4", "G#3", "C#3", "F#2", "B1" , "E1"  ],
		[ "F#7", "B6" , "E6" , "A5" , "D5" , "G4" , "C4" , "F3" , "A#2", "D#2", "G#1" ],
		[ "D#7", "G#6", "C#6", "F#5", "B4" , "E4" , "A3" , "D3" , "G2" , "C2" , "F1"  ],
		[ "G7" , "C7" , "F6" , "A#5", "D#5", "G#4", "C#4", "F#3", "B2" , "E2" , "A1"  ],
		[ "E7" , "A6" , "D6" , "G5" , "C5" , "F4" , "A#3", "D#3", "G#2", "C#2", "F#1" ],
		[ "G#7", "C#7", "F#6", "B5" , "E5" , "A4" , "D4" , "G3" , "C3" , "F2" , "A#1" ],
		[ "F7" , "A#6", "D#6", "G#5", "C#5", "F#4", "B3" , "E3" , "A2" , "D2" , "G1"  ],
		[ "A7" , "D7" , "G6" , "C6" , "F5" , "A#4", "D#4", "G#3", "C#3", "F#2", "B1"  ],
		[ "F#7", "B6" , "E6" , "A5" , "D5" , "G4" , "C4" , "F3" , "A#2", "D#2", "G#1" ],
		[ "A#7", "D#7", "G#6", "C#6", "F#5", "B4" , "E4" , "A3" , "D3" , "G2" , "C2"  ],
		[ "G7" , "C7" , "F6" , "A#5", "D#5", "G#4", "C#4", "F#3", "B2" , "E2" , "A1"  ],
		[ "B7" , "E7" , "A6" , "D6" , "G5" , "C5" , "F4" , "A#3", "D#3", "G#2", "C#2" ],
	];

	const OCTAVE_COLORS = [ "#004080", "#0059b3", "#0073e6", "#1a8cff", "#4da6ff", "#80bfff", "#b3d9ff" ]

	// Grab the DOM element for the grid to be set in
	var harmonicTable = $(".harmonic-table");

	for (col = 0; col < NOTES.length; col++) {
		// create the column
		harmonicTable.append(`<ul id="column-${col}"></ul>`);

		// add each hexagon to the newly created column
		for (row = 0; row < NOTES[0].length; row++) {
			harmonicTable.children(`ul#column-${col}`).append(`<li><div style="background-color: ${OCTAVE_COLORS[parseInt(NOTES[col][row].slice(-1)) - 1]};" class="hex" data-note="${NOTES[col][row]}"><span></span></div></li>`);
		}
	}
}

/* 
	Handles color changes when hovering over hexagons. 
	You can't target :before and :after with js.
 */
function initHexHover() {
	$(".harmonic-table .hex").hover(function() {
		$(this).addClass("hover");
	}, function() {
		$(this).removeClass("hover");
	});
}

function initRangeLabels() {
	// set the value initialy
	$("input[type=range]").each(function() {
		$(this).siblings("output.range").text($(this).val());
	});
	
	// create a handler for any changes
	$("input[type=range]").on("input change", function() {
		$(this).siblings("output.range").text($(this).val());
	});
}

function initActiveToolClick() {
	$("#pattern-tools .hex").on("click", function() {
		if ($(this).hasClass("active-tool")) {
			$(this).removeClass("active-tool");
		} else {
			$("#pattern-tools .hex").not(this).removeClass("active-tool");

			$(this).addClass("active-tool");
		}
	});
}

function showNotes() {
	$("#show-notes").on("change", function() {
		if ($(this).is(":checked")) {
			$(".harmonic-table .hex").each(function(index, element) {
				$(this).children("span").text($(this).attr("data-note"));
			});
		} else {
			$(".harmonic-table .hex > span").text("");
		}
	});
}