function Laser(ship) {
  this.position = createVector(ship.position.x, ship.position.y);
  this.velocity = p5.Vector.fromAngle(ship.heading);
  this.velocity.mult(10);

  this.update = function() {
    this.position.add(this.velocity);
  };

  this.render = function() {
    push();
    stroke(255);
    strokeWeight(4);
    point(this.position.x, this.position.y);
    pop();
  };

  this.collided = function(asteroid) {
    let d = dist(
      this.position.x,
      this.position.y,
      asteroid.position.x,
      asteroid.position.y
    );
    if (d < asteroid.radius) {
      return true;
    }
    return false;
  };

  this.offScreen = function() {
    if (
      this.position.x > width ||
      this.position.x < 0 ||
      this.position.y > height ||
      this.position.y < 0
    ) {
      return true;
    }
    return false;
  };
}
