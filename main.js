// main.js
let gameSpace = document.getElementById("game");
generateHTMLElement(obj);

//this funciton allows for the page to create an element on HTML and display it by pulling data from object->rename obj?
function generateHTMLElement(obj) {
  let element = document.createElement(obj.type);
  element.classList = obj.classList;
  if (obj.id) {
    element.id = obj.id;
  }
  if (obj.parent) {
    obj.parent.appendChild(element);
  }
  if (obj.listener) {
    element.addEventListener("click", obj.listener);
  }
  return element;
}

var obj = {
  id: "board",
  type: "div",
  listener: clickMe,
  parent: document.getElementById("game"),
  classList: "container",
};

function clickMe(e) {}

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
