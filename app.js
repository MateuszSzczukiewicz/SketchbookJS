const pencilColor = document.getElementById("pencil-color");
const backgroundColor = document.getElementById("background-color");
const pencilSize = document.getElementById("pencil-size");

const clear = document.getElementById("clear");
const save = document.getElementById("save");

let pencilColorValue = pencilColor.value;
let pencilSizeValue = pencilSize.value;
let backgroundColorValue = backgroundColor.value;

function setup() {
  const canvas = createCanvas(2000, 1000);
  canvas.mouseClicked(changeBackground);
}

function draw() {
  if (mouseIsPressed) {
    stroke(pencilColorValue);
    strokeWeight(pencilSizeValue);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function changeColor() {
  pencilColorValue = pencilColor.value;
}

function changeSize() {
  pencilSizeValue = pencilSize.value;
}

function changeBackground() {
  backgroundColorValue = backgroundColor.value;
  background(backgroundColorValue);
}

pencilColor.addEventListener("input", changeColor);
pencilSize.addEventListener("input", changeSize);
