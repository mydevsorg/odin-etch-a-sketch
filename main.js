const gridContainer = document.querySelector(".grid");
const button = document.createElement("button");
button.textContent = "New Grid";
button.className = "btn";
gridContainer.appendChild(button);

function grid(rows, columns) {
  for (let i = 1; i <= rows; i++) {
    let row = document.createElement("div");
    row.className = "grid-row";
    gridContainer.appendChild(row);

    for (let j = 1; j <= columns; j++) {
      let square = document.createElement("div");
      square.className = "square";
      row.appendChild(square);
    }
  }
}

grid(16, 16);

let gridSquares = document.querySelectorAll(".square");

gridSquares.forEach((square) => {
  square.addEventListener(
    "mouseover",
    () => (square.style.backgroundColor = "red"),
  );
});

button.addEventListener("click", () => {
  let squaresNum = +prompt(
    "Enter the number of squares per side of the new grid:",
  );

  squaresNum <= 100
    ? squaresNum
    : (squaresNum = +prompt(
        "Enter the number of squares per side of the new grid: (Maximum : 100)",
      ));

  gridContainer.textContent = "";

  gridContainer.appendChild(button);

  grid(squaresNum, squaresNum);

  gridSquares = document.querySelectorAll(".square");

  gridSquares.forEach((square) => {
    square.addEventListener(
      "mouseover",
      () => (square.style.backgroundColor = "red"),
    );
  });
});
