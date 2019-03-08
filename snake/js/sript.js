var FIELD_SIZE_X = 20;
var FIELD_SIZE_Y = 20;


var $gameField;
var $gameTable;
var snakeCordX;
var snakeCordY;
var snake = [];

function init() {
	$gameField = document.getElementById('game-field');
	buildGameField()
}
function respawn() {
	snakeCordX = Math.floor(FIELD_SIZE_X/2);
	snakeCordY = Math.floor(FIELD_SIZE_Y/2);
}

function buildGameField() {
	$gameTable = document.createElement('table');
	$gameTable.classList.add('game-table')
	for (var i = 0; i < FIELD_SIZE_X; i++) {
		var $row = document.createElement('tr');
		for (var j = 0; j < FIELD_SIZE_Y; j++) {
			var $cell = document.createElement('td');
			$cell.classList.add('game-cell');

			$row.appendChild($cell);

		}
		$gameTable.appendChild($row);
	}
	$gameField.appendChild($gameTable);
}

window.addEventListener('load', init);
