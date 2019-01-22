function characterbutton (config) {
	
 		this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width ||89;
    this.height = config.height || 0;
    this.label = config.label || "Click";
    this.color = config.color || color(212, 30, 30);
    this.onClick = config.onClick ||
  
function() {};
}
	
characterbutton.prototype.draw = function() {
    if (this.isMouseInside() && mouseIsPressed) {
        fill(81, 242, 0);
    }
    else {
       fill(this.color); 
    }
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height, 0);
    fill(0, 0, 0);
    textSize(19);
    textAlign(CENTER, CENTER);
    text(this.label, this.x, this.y);
};

characterbutton.prototype.isMouseInside = function() {
    return mouseX > this.x-this.width/2 &&
           mouseX < (this.x + this.width/2) &&
           mouseY > this.y - this.height/2 &&
           mouseY < (this.y + this.height/2);
};

characterbutton.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};
