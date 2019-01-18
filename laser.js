function Laser(spos, angle) {

  this.pos = createVector(spos.x, spos.y);
  this.vel = p5.Vector.fromAngle(angle);
  this.vel.mult(20);

  this.update = function() {
    this.pos.add(this.vel);
  }

  this.render = function() {

    push();
    fill(255);
    stroke(255);
    strokeWeight(4);
    point(this.pos.x, this.pos.y);
    pop();

  }

  this.hits = function(asteroids){
  var d= dist(this.pos.x, this.pos.y, asteroids.pos.x, asteroids.pos.y)
  if( d < asteroids.r){
 return true;
  } else {
  return false;
  
  }
    
  }
  
 

 
 
  
  
  
  
}
