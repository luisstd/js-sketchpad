// dom variables
const container = document.getElementById("container");
const button = document.querySelector(".button");

// creating the grid
function createGrid() {
  for (let i = 0; i < 16; i++) {
   let cell = document.createElement("div");
   container.appendChild(cell);
  }
}
createGrid();
