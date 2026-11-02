const gridContainer = document.querySelector(".grid");

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
