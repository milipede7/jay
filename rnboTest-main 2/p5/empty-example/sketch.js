let canvas;

function setup() {
  // canvas.parent("sketch-holder");
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(51, 255, 153,.2);
}
