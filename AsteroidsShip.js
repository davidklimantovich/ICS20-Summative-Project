function AsteroidsShip() {

  this.pos = createVector(width / 2, height / 2);
  this.r = 20;
  this.rotation = 0;
  this.heading = 0;
  this.vel = createVector(0, 0);
  this.isBoosting = false;
  this.isReversing = false;

  this.boosting = function(b) {
    this.isBoosting = b;
  }
  
  this.reversing = function(r) {
    this.isReversing = r;
  }

  this.update = function() {

    if (this.isBoosting) {
      this.boost();
    }

    this.pos.add(this.vel);
    this.vel.mult(0.5);
		this.rotation *= (0.95);
  }

  this.boost = function() {

    var force = p5.Vector.fromAngle(this.heading);
    force.mult(0.1);
    this.vel.add(force);
  }
  
  this.reverse = function() {

    var force = p5.Vector.fromAngle(this.heading);
    force.mult(-0.1);
    this.vel.add(force);
  }
  
  
   //This is when the asteroid hit the ship
  this.hits = function (asteroid){
 
  var d= dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y)
  if( d < this.r +asteroid.r){
 return true;
  } else {
  return false;  
  
  }
}
  
  

  this.render = function() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.heading + PI / 2);
    stroke(255,0,0);
    image(AsteroidShip,-20,-35, 45, 95, this.r+35, this.r, 0, -this.r);
    pop();
  }

  this.edges = function() {

    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    } 
    else if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }

    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    } 
    else if (this.pos.y < -this.r) {
      this.pos.y = height + this.r;
    }
   }

  this.setRotation = function(a) {
    this.rotation = a;
  }

  this.turn = function() {
    this.heading += this.rotation;

  }
}

function Laser(spos, angle) {

  this.pos = createVector(spos.x, spos.y);
  this.vel = p5.Vector.fromAngle(angle);
  this.vel.mult(15);

  this.update = function() {
    this.pos.add(this.vel);
  }

  this.render = function() {

    push();
    fill(255);
    stroke(255,0,0);
    strokeWeight(2.5);
    point(this.pos.x-15, this.pos.y);
    point(this.pos.x, this.pos.y);
    point(this.pos.x+15, this.pos.y);

    pop();

  }
  
  

  
  
  

}
