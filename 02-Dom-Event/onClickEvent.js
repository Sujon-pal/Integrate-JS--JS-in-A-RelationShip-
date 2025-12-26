// Options - 1 Click Event Handler

function makeRed() {
  document.body.style.backgroundColor = "red";
}
// Options - 2 get element by id
function makeYellow() {
  document.getElementById("yellow").style.backgroundColor = "yellow";
}

// Options - 3 get element by id

const makeGreen = document.getElementById("green");
makeGreen.onclick = function () {
  makeGreen.style.backgroundColor = "green";
};
