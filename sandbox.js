/ main.js
// let game = document.getElementById("game");  update
//init player turn obj to allow for user input
let turnCount = [
  { player: null },
  { player: null },
  { player: null },
  { player: null },
  { player: null },
  { player: null },
  { player: null },
  { player: null },
  { player: null },
];
//symbols to be measured by turn
let characters = ["X", "O"];
//empty array to be filled with object
let players = [];
//object with appropriate player information
players = [
  {
    character: [0],
    value: 1,
    name: "Player 1",
  },
  {
    character: [1],
    value: 2,
    name: "Player 2",
  },
];
//win condition arr of arrs, holds index value of board and will link to checkWin function to
var winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
//renders page and displays new HTML elements
function displayGame() {
    //Adds title to the page
  let title = document.createElement("h1");
  title.classList.add("pb-3")
  title.textContent = "TicTacToe!";
  gameBoard.appendChild(title);

  cre