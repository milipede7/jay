// let canvas;
let y = 100;
let p5canvas;
let createP5Canvas;


function setup() {
  // canvas.parent("sketch-holder");
  p5canvas = createCanvas(windowWidth, windowHeight);
  p5canvas.position(0,0);
  p5canvas.style('z-index','-1');
  stroke(100,255,23);
  frameRate(70);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// function draw() {
//   background(100,255,23,.5);
//   y = y - 1;
//   if (y < 0) {
//     y = height;
//   }
//   line(0, y, width, y);
// }

function draw() {
  // background(100,255,23,.5);
  drawCircle(width / 2, 280, 6);
}

function drawCircle(x, radius, level) {
  const tt = (150 * level) / 7.0;
  // const ff = (150 * radius) / 7.0;
  // fill(ff,255,23,.5);
  fill(tt,255,23,.5);
  ellipse(x, height / 2, radius * 2, radius * 2);
  if (level > 1) {
    level = level - 1;
    drawCircle(x - radius / 2, radius / 2, level);
    drawCircle(x + radius / 2, radius / 2, level);
  }
}

// function drawCircle(x, radius, level) {
//   const tt = (126 * level) / 4.0;
//   fill(tt);
//   ellipse(x, height / 2, radius * 2, radius * 2);
//   if (level > 1) {
//     level = level - 1;
//     drawCircle(x - radius / 2, radius / 2, level);
//     drawCircle(x + radius / 2, radius / 2, level);
//   }
// }
