function asteroid(){
  this.pos = createVector(random(-1*GAMEWIDTH/2,GAMEWIDTH/2),random(-1*GAMEHEIGHT/2,GAMEHEIGHT/2));
  this.velocity = createVector(0,0);
  this.r = random(20,100);
  this.theta = 0;
  this.dtheta = 0;
  this.speed = 0.05;
  this.accel = createVector(0,0);
  this.numPoints = Math.floor(random(5,15));
  this.offset = [];
  this.screenPos = createVector(this.pos.x,this.pos.y);

  for(var i=0; i<this.numPoints; i++){
	  this.offset[i] = random(-15,15);
  }

  this.update = function(){
	this.screenPos.x += gameVector.x;
	this.screenPos.y += gameVector.y;
	this.theta += this.dtheta;
	this.velocity.add(this.accel);
    this.pos.add(this.velocity);
  }



  this.draw = function(){ //this draws the object
	push();
    stroke(255); //white stroke
    noFill(); //don't fill
    translate(this.screenPos.x,this.screenPos.y);//move to the position on the screen
    rotate(this.theta);//rotate 
	beginShape();
	angleMode(RADIANS);
	for(var i=0; i<this.numPoints; i++){
		var angle = map(i,0,this.numPoints,0,TWO_PI);
		var r = this.r + this.offset[i]; //make the radius vary so that the asteroids look random
		var x = r*Math.cos(angle);
		var y = r*Math.sin(angle);
		vertex(x,y);
	}
	endShape(CLOSE);
	angleMode(DEGREES);

	pop();
  }



  	this.render = function(){ //called every frame
	  this.update(); //update positions
	  this.draw(); //draw the object
  }


}