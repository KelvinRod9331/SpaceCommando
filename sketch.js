var ship;
var asteroids = [];
var lasers = [];

function windowResized() {
  resizeCanvas(windowWidth, windowHeight, true);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ship = new Ship();

  for (let x = 1; x <= 5; x++) {
    asteroids.push(new Asteroid());
  }
}

function draw() {
  background(0);
  asteroids.forEach(asteroid => {
    asteroid.render();
    asteroid.update();
    asteroid.screenEdge();
  });

  lasers.reverse().forEach((laser, i) => {
    laser.render();
    laser.update();

    asteroids.reverse().forEach((asteroid, j) => {
      if (laser.collided(asteroid)) {
        if (asteroid.radius > 10) {
          var pieces = asteroid.collision();
          asteroids = asteroids.concat(pieces);
        } else {
          //increase the score
        }

        asteroids.splice(j, 1);
        lasers.splice(i, 1);
      }
    });

    if (laser.offScreen()) {
      lasers.splice(i, 1);
    }
  });

  ship.render();
  ship.rotate();
  ship.update();
  ship.screenEdge();

  if (keyIsDown(RIGHT_ARROW)) {
    ship.setRotation(0.1);
  } else if (keyIsDown(LEFT_ARROW)) {
    ship.setRotation(-0.1);
  } else if (keyIsDown(UP_ARROW)) {
    ship.thrusting(true);
  }
}

function keyReleased() {
  ship.setRotation(0);
  ship.thrusting(false);
}

function keyPressed() {
  if (key === " ") {
    lasers.push(new Laser(ship));
  }
}
