// Game State
const players = ["X", "O"];
const gameBoard = ["", "", "", "", "", "", "", "", ""];
let currentPlayer;
let gameBoardElem;

// creates title for page
const createTitle = (title) => {
  const titleElem = document.createElement("h1");
  //title is called here but text content dislayed at bottom
  titleElem.textContent = title;

  document.body.appendChild(titleElem);
};
//creates overall game board element
const makeGameBoardElem = () => {
  const gameBoardElem = document.createElement("div");

  gameBoardElem.classList.add("game-board");

  return gameBoardElem;
};
//creates individual squares for game board
const makeSquareElem = (squareNumber) => {
  const squareElement = document.createElement("div");
  squareElement.classList.add("game-square");
  //adds functionality to
  squareElement.addEventListener(
    "click",
    (event) => {
      const { target } = event; //allows for player input based on currentPlayer
      target.textContent = currentPlayer;
      gameBoard[squareNumber] = currentPlayer;
      checkBoard();
      switchPlayer();
    },
    { once: true } //once button is clicked, removes click
  );
  return squareElement;
};

// loopps through player index to simulate turns
const switchPlayer = () => {
  if (currentPlayer === players[0]) {
    currentPlayer = players[1];
  } else {
    currentPlayer = players[0];
  }
};
//displays all winning combos in arr of arrs to allow for checking of win based on turn
const checkBoard = () => {
  const winningStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  //allows for checking of winning states based on turn input within square index
  for (let winState of winningStates) {
    //checks values of winstate by runnning through winstates
    const [position1, position2, position3] = winState; //frame work for checking
    if (
      gameBoard[position1] !== "" &&
      gameBoard[position1] === gameBoard[position2] && //all 3 must be same "input value"
      gameBoard[position1] === gameBoard[position3]
    ) {
      completeGame(`${gameBoard[position1]} player Wins!`); //message to display
    }
  }
  //if all squares are used it will turn to draw
  const allSquaresUsed = gameBoard.every((square) => square !== "");

  if (allSquaresUsed) {
    completeGame(`It's a tie!`);
  }
};
//creates overlay element to display winner/tie.  refers to complete game
const completeGame = (message) => {
  const overlayElem = document.createElement("div");
  overlayElem.style.position = "fixed";
  overlayElem.style.top = "0";
  overlayElem.style.left = "0";
  overlayElem.style.bottom = "0";
  overlayElem.style.right = "0";
  overlayElem.style.backgroundColor = "rgba(0,0,0,0.8)";
  overlayElem.style.display = "flex";
  overlayElem.style.flexDirection = "column";
  overlayElem.style.justifyContent = "center";
  overlayElem.style.alignItems = "center";
  overlayElem.style.textAlign = "center";
  //adds text content and
  const messageElem = document.createElement("h2");
  messageElem.textContent = message;
  messageElem.style.color = "white";
  messageElem.style.fontSize = "100px";

  overlayElem.appendChild(messageElem);
  //creates button to reset the game
  const restartButtonElem = document.createElement("button");
  restartButtonElem.textContent = "Restart";
  restartButtonElem.style.backgroundColor = "transparent";
  restartButtonElem.style.color = "white";
  restartButtonElem.style.border = "1px solid white";
  restartButtonElem.style.padding = "10px 30px";
  //adds event listener to reset game by removing overlay message
  restartButtonElem.addEventListener("click", () => {
    resetGame();
    document.body.removeChild(overlayElem);
  });

  overlayElem.appendChild(restartButtonElem);

  document.body.appendChild(overlayElem);
};

// function to follow reset game function as well as initialize game state
const resetGame = () => {
  if (gameBoardElem) {
    //removes old board
    document.body.removeChild(gameBoardElem);
  }
  //calls game board from above and
  gameBoardElem = makeGameBoardElem();
  //for loop to generate total squares
  for (let row = 0; row < 9; row++) {
    gameBoardElem.appendChild(makeSquareElem(row));
  }
  //refers to player arr and allows for turn to switch "player" and recieve appropriate input based on turn
  currentPlayer = players[0];
  gameBoard.fill("");

  document.body.appendChild(gameBoardElem);
};
//displays title on page
createTitle("Tic-tac-toe");
resetGame();
