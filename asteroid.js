function Asteroid(position, radius) {
  this.position = position
    ? position.copy()
    : createVector(random(width), random(height));
  this.velocity = p5.Vector.random2D();
  this.radius = radius ? radius * 0.5 : random(15, 50);
  this.amount = floor(random(5, 15));
  this.offSet = [];
  for (let x = 0; x < this.amount; x++) {
    this.offSet[x] = random(-this.radius * 0.5, this.radius * 0.5);
  }

  this.update = function() {
    this.position.add(this.velocity);
  };

  this.render = function() {
    push();
    stroke(255);
    noFill();
    translate(this.position.x, this.position.y);
    beginShape();

    for (let i = 0; i < this.amount; i++) {
      var angle = map(i, 0, this.amount, 0, TWO_PI);
      var r = this.radius + this.offSet[i];
      var x = r * cos(angle);
      var y = r * sin(angle);
      vertex(x, y);
    }
    endShape(CLOSE);
    pop();
  };

  this.collision = function() {
    var piece = [];
    piece[0] = new Asteroid(this.position, this.radius);
    piece[1] = new Asteroid(this.position, this.radius);
    return piece;
  };

  this.screenEdge = function() {
    if (this.position.x > width + this.radius) {
      this.position.x = -this.radius;
    } else if (this.position.x < -this.radius) {
      this.position.x = width + this.radius;
    }

    if (this.position.y > height + this.radius) {
      this.position.y = -this.radius;
    } else if (this.position.y < -this.radius) {
      this.position.y = height + this.radius;
    }
  };
}

/**
 * This is saved here because this can be useful when I want to use a certain type of special or power up 
 * and want that power up to follow the character for example this function is rendering an ellipse that
 * follows the ship around 
 
    this.radiusender = function(){
        push() <-- This is going to save the current translation/rotation state 
        translate(this.position.x, this.position.y) <-- This translate is using the ships position being drawn relative to the ship location.
        ellipse(0,0, this.radius * 2)
        pop()  <-- This will restore the translation/rotation 
    }

 */
