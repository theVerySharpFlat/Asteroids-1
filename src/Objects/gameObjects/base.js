function Base(){//this is where we start\

  //your standard physics attributes
  this.pos = createVector(width/2,height/2);
  this.screenPos = createVector(this.pos.x,this.pos.y);
  this.velocity = createVector(0,0);
  this.accel = createVector(0,0);

  //radius for drawing
  this.r = 300;

  //angle(which shouldn't be used)
  this.theta = 0;
  this.dtheta = 0;



  this.update = function(){
	//standard update
	/*this.theta += this.dtheta;
	this.velocity.set(gameVector);
	this.velocity.add(this.accel);
    this.pos.add(this.velocity);*/
	//your standard scrolling calculation
	this.screenPos.add(gameVector);

	//standard update procedure
	this.velocity.add(this.accel);
	this.pos.add(this.velocity);

	//and then we want to take the bullet velocity into acccount
	this.screenPos.add(this.velocity);
  }



  this.draw = function(){ //this draws the object
	push();
    stroke(255); //white stroke
    noFill(); //don't fill
    translate(0,0);//move to the position
    rotate(this.theta);//rotate 
	//line(this.pos.x,this.pos.y,width/2,height/2);
	ellipse(this.screenPos.x,this.screenPos.y,this.r);
	pop();
  }
  this.render = function(){//standard rendering
	  this.update();
	  this.draw();
  }
}