const pencilColor = document.getElementById('pencil-color');
const backgroundColor = document.getElementById('background-color');
const pencilSize = document.getElementById('pencil-size');

const clear = document.getElementById('clear');
const save = document.getElementById('save');

function setup() {
    createCanvas(1900, 850);
    // saveCanvas('pieceOfArt', 'jpg');
}

function draw() {
    if (mouseIsPressed === true) {
        point(mouseX, mouseY);
        strokeWeight(10);
    } else {
        null;
    }
}