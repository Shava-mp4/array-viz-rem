// ARRAY VISUALIZER

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
// let myArray = [
//   200, 500, 350, 400, 580, 170, 225, 325, 100, 550, 250, 300, 600, 50, 275,
// ];
let myArray = [];
for (let i = 0; i < 50; i++) {
  myArray.push(200);
}

for (let i = 0; i < 50; i++) {
  let rand = Math.round(Math.random() * myArray.length);
  myArray.splice(rand, 0, 400);
}

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
  // Logic
  let barWidth = cnv.width / myArray.length;

  // Drawing
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Draw Bar Graph
  ctx.fillStyle = "orange";
  ctx.strokeStyle = "grey";
  for (let i = 0; i < myArray.length; i++) {
    ctx.fillRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
    ctx.strokeRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
  }

  // Request another Animation Frame
  requestAnimationFrame(draw);
}

// // Key events
document.addEventListener("keydown", keydownHandler);

// --------Remove Challenge------------
function keydownHandler(event) {
  console.log(event.code);

  if (event.code == "Digit1") {
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i] == 400) {
        myArray.splice(i, 1);
        i--;
      }
    }
  } else if (event.code == "Digit2") {
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i] == 200) {
        myArray.splice(i, 1);
        i--;
      }
    }
  }
}
