const cellElements = Array.from(document.querySelectorAll(".square"));

const rows = [
  [...document.querySelectorAll(".first-row >.square")],
  [...document.querySelectorAll(".second-row >.square")],
  [...document.querySelectorAll(".third-row >.square")],
];
console.log(rows);
let currentColumn = 0;
let isItCircleMove = true;
let clicks = 0;
const handleFlag = (e) => {
  e.target.removeEventListener("click", handleFlag);
  clicks += 1;
  if (clicks >= 5) {
    const isItRowWin = rows.find((tr) =>
      tr.every((td) => td.innerText === "O" || td.innerText === "X")
    );

    console.log(isColumnsWin(rows, currentColumn));
  }

  e.target.innerText = isItCircleMove ? "O" : "X";
  const isItRowWin = rows.find((tr) =>
    tr.every((td) => td.innerText === "O" || td.innerText === "X")
  );

  isItCircleMove = !isItCircleMove;
};

cellElements.forEach((element) =>
  element.addEventListener("click", handleFlag)
);

const isItColumnsWin = rows.find((tr) => {
  return tr.every((td, index) => td.innerText === "O" || td.innerText === "X");
  currentColumn += 1;
});

const isColumnsWin = (rows, currentColumn = 0) => {
  if (currentColumn >= rows[0].length) {
    return null;
  }
  const isColumnWin = rows.every((tr) => {
    const td = tr[currentColumn];
    return td.innerText === "O" || td.innerText === "X";
  });
  if (isColumnWin) {
    return rows;
  } else {
    currentColumn += 1;
    return isColumnsWin(rows, currentColumn);
  }
};
