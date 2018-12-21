var ship;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight, true);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ship = new Ship();
}

function draw() {
  background(0);
  ship.render();
  ship.rotate();
  ship.update();
  ship.screenEdge()
}

function keyReleased() {
  ship.setRotation(0);
  ship.thrusting(false);
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    ship.setRotation(0.1);
  } else if (keyCode == LEFT_ARROW) {
    ship.setRotation(-0.1);
  } else if (keyCode == UP_ARROW) {
    ship.thrusting(true);
  }
}
