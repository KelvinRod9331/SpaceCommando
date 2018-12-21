function Ship() {
  this.pos = createVector(width / 2, height / 2);
  this.r = 20;
  this.heading = 0;
  this.rotation = 0;
  this.velocity = createVector(0, 0);
  this.isThrusting = false;

  this.render = function() {
    translate(this.pos.x, this.pos.y);
    rotate(this.heading + PI / 2);
    noFill();
    stroke(255);
    triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
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
    this.pos.add(this.velocity);
    this.velocity.mult(0.99);
  };

  this.thrust = function() {
    var force = p5.Vector.fromAngle(this.heading);
    force.mult(0.1)
    this.velocity.add(force);
  };

  this.screenEdge = function(){
      if(this.pos.x > width + this.r){
          this.pos.x =- this.r
      } else if(this.pos.x < -this.r){
          this.pos.x = width + this.r
      }

      if(this.pos.y > height + this.r){
        this.pos.y =- this.r
    } else if(this.pos.y < -this.r){
        this.pos.y = height + this.r
    }
  }
}