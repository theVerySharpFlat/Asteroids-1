function SomeName(){
  this.pos = createVector(width/2,height/2);
  this.velocity = createVector(0,0);
  this.r = 20;
  this.theta = 0;
  this.dtheta = 0;
  this.speed = 0.05;
  this.accel = createVector(0,0);
  angleMode(DEGREES);


  this.update = function(){
	
	this.theta += this.dtheta;
	this.velocity.set(gameVector);
	this.velocity.add(this.accel);
    this.pos.add(this.velocity);
  }



  this.draw = function(){ //this draws the object
	push();
    stroke(255); //white stroke
    noFill(); //don't fill
    translate(this.pos.x,this.pos.y);//move to the position
    rotate(this.theta);//rotate 

	pop();
  }



  this.render = function(){ //called every frame
	this.update(); //update positions
	this.draw(); //draw the object
  }


}