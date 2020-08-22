const container = document.getElementById('container');
const cell = (function createCell() {
	let squareCell = document.createElement('div');
	container.appendChild(squareCell);
	})();

function createGrid() {
	for(let i = 0; i < 16; i++) {
		container.cloneNode(cell);
	};
}

createGrid();

