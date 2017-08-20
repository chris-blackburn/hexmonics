/*
	Generate the view of the harmonic table
*/
const NUM_COLUMNS = 14;
const NUM_ODD_COLUMN_HEXAGONS = 7;
const NUM_EVEN_COLUMN_HEXAGONS = 8;

const NOTES = [
	["G5", "C5", "F4", "A#3", "D#3", "G#2", "C#2", null ],
	["B5", "E5", "A4", "D4", "G3", "C3", "F2", "A#1" ],
	["G#5", "C#5", "F#4", "B3", "E3", "A2", "D2", null ],
	["C6", "F5", "A#4", "D#4", "G#3", "C#3", "F#2", "B1" ],
	["A5", "D5", "G4", "C4", "F3", "A#2", "D#2", null ],
	["C#6", "F#5", "B4", "E4", "A3", "D3", "G2", "C2" ],
	["A#5", "D#5", "G#4", "C#4", "F#3", "B2", "E2", null ],
	["D6", "G5", "C5", "F4", "A#3", "D#3", "G#2", "C#2" ],
	["B5", "E5", "A4", "D4", "G3", "C3", "F2", null ],
	["D#6", "G#5", "C#5", "F#4", "B3", "E3", "A2", "D2" ],
	["C6", "F5", "A#4", "D#4", "G#3", "C#3", "F#2", null ],
	["E6", "A5", "D5", "G4", "C4", "F3", "A#2", "D#2" ],
	["C#6", "F#5", "B4", "E4", "A3", "D3", "G2", null ],
	["F6", "A#5", "D#5", "G#4", "C#4", "F#3", "B2", "E2" ]
];

function createHarmonicTable() {
	// Grab the DOM element for the grid to be set in
	const HEX_GRID = $("div.hex-grid");
	
	/* used to oscilate for corrent tessellation */
	var oddColumn = true;
	

	for (i = 0; i < NUM_COLUMNS; i++) {
		var column = `<ul data-column-number="${i}">`;
		
		// If it is an odd column, use the appropriate number of hexagons
		for (j = 0; j < (oddColumn ? NUM_ODD_COLUMN_HEXAGONS : NUM_EVEN_COLUMN_HEXAGONS); j++)
			column += `<li><div data-note="${NOTES[i][j]}" class="hex"></div></li>`;

		oddColumn = !oddColumn;
		column += "</ul>";
		HEX_GRID.append(column);
	}
}

/* 
	Handles color changes when hovering over hexagons. 
	You can't target :before and :after with js.
 */
function initHexHover() {
	$(".hex").hover(function() {
		$(this).addClass("hover");
	}, function() {
		$(this).removeClass("hover");
	});
}