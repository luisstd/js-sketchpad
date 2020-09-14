// dom variables
const container = document.querySelector(".container");
const container__grid = document.querySelector(".container__grid");
const button = document.querySelector(".button");

// set grid size
let input = parseInt(prompt("Please enter number of squares per side", "Enter any number larger than 16"));
button.addEventListener("click", setSize());

function setSize() {
  container__grid.style.setProperty("grid-template-rows", `repeat(${input}, 1fr)`);
  container__grid.style.setProperty("grid-template-columns", `repeat(${input}, 1fr)`);
};

// creating the grid
function createGrid() {
  for (let i = 0; i < input*input ; i++) {
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
