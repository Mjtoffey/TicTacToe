// main.js
let gameSpace = document.getElementById("gameSpace");

function createBoard() {
  //create a grid using js to place HTML elements
  for (var rows = 0; rows <= 3; rows++) {
    for (var columns = 0; columns <= 3; columns++) {
      $("#gameSpace").append("<div class='grid'></div>");
    }
    $(".grid").width(960 / x);
    $(".grid").height(960 / x);
  }
}
