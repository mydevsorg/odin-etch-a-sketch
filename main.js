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
  let count = 0;
  let opacity = 1;
  square.addEventListener("mouseover", () => {
    count++;
    let red = Math.trunc(Math.random() * 255) + 1;
    let green = Math.trunc(Math.random() * 255) + 1;
    let blue = Math.trunc(Math.random() * 255) + 1;
    let randomColor = `rgb(${red},${green},${blue})`;

    square.style.backgroundColor = randomColor;

    if (count > 0 && count < 10) {
      opacity -= 0.1;
      square.style.opacity = opacity;
    }
  });
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
    let count = 0;
    let opacity = 1;
    square.addEventListener("mouseover", () => {
      count++;
      let red = Math.trunc(Math.random() * 255) + 1;
      let green = Math.trunc(Math.random() * 255) + 1;
      let blue = Math.trunc(Math.random() * 255) + 1;
      let randomColor = `rgb(${red},${green},${blue})`;

      square.style.backgroundColor = randomColor;

      if (count > 0 && count < 10) {
        opacity -= 0.1;
        square.style.opacity = opacity;
      }
    });
  });
});
