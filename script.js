// dom variables
const container = document.querySelector(".container");
const container__grid = document.querySelector(".container__grid");
const button = document.querySelector(".button");

// creating the grid
function createGrid() {
  for (let i = 0; i < 64; i++) {
    let cell = document.createElement("div");
    container__grid.appendChild(cell).classList.add("cell");

    cell.addEventListener(
      "mouseenter",
      function (event) {
        event.target.style.backgroundColor = "black";
      },
      false
    );
  }
}
createGrid();
