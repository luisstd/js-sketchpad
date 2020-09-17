// dom variables
const container = document.querySelector(".container");
const container__grid = document.querySelector(".container__grid");
const button = document.querySelector(".button");

// set grid size
var input;
function reset() {
  window.location.reload();
}
function promptSize() {
  input = parseInt(
    prompt(
      "Please enter number of squares per side",
      "Enter number between 2 and 100"
    )
  );

  function setSize() {
    container__grid.style.setProperty(
      "grid-template-rows",
      `repeat(${input}, 1fr)`
    );
    container__grid.style.setProperty(
      "grid-template-columns",
      `repeat(${input}, 1fr)`
    );
  }

  function createGrid() {
    for (let i = 0; i < input * input; i++) {
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
    setSize();
  }

  createGrid();
}
