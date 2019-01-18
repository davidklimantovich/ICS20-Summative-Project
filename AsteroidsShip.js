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
    
    if (this.collsion > asteroids){
    fill(255,0,0)
      rect(145,30,100,12)
    //this.value();
    } 

    this.pos.add(this.vel);
    this.vel.mult(0.9);
  
  }

  this.boost = function() {

    var force = p5.Vector.fromAngle(this.heading);
    force.mult(0.2);
    this.vel.add(force);
  }
  
  this.reverse = function() {

    var force = p5.Vector.fromAngle(this.heading);
    force.mult(-0.2);
    this.vel.add(force);
  }

  this.render = function() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.heading + PI / 2);
    fill(0);
    stroke(255);
    triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
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
  
this.collsion = function(asteroid){
 
  var d= dist(this.pos.x, this.pos.y, asteroids.pos.x, asteroids.pos.y)
  if( d < asteroids.r){
 return true; 
  } else {
  return false;
  }
}

this.healthOfShip = function(){

}


}
