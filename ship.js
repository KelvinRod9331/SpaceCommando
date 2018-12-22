function Ship() {
  this.position = createVector(width / 2, height / 2);
  this.r = 20;
  this.heading = 0;
  this.rotation = 0;
  this.velocity = createVector(0, 0);
  this.isThrusting = false;

  this.render = function() {
    push()
    translate(this.position.x, this.position.y);
    rotate(this.heading + PI / 2);
    fill(0);
    stroke(255);
    triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
    pop()
  };

  this.rotate = function() {
    this.heading += this.rotation;
  };

  this.thrusting = function(b) {
    this.isThrusting = b;
  };

  this.setRotation = function(a) {
    this.rotation = a;
  };

  this.update = function() {
    if (this.isThrusting) {
      this.thrust();
    }
    this.position.add(this.velocity);
    this.velocity.mult(0.99);
  };

  this.thrust = function() {
    var force = p5.Vector.fromAngle(this.heading);
    force.mult(0.1)
    this.velocity.add(force);
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

  this.screenEdge = function(){
      if(this.position.x > width + this.r){
          this.position.x =- this.r
      } else if(this.position.x < -this.r){
          this.position.x = width + this.r
      }

      if(this.position.y > height + this.r){
        this.position.y =- this.r
    } else if(this.position.y < -this.r){
        this.position.y = height + this.r
    }
  }
}
