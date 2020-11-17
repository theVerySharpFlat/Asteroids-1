function Laser(pos,angle,initVel){ //this is a laser

	this.bulletSpeed = 5;//this is just a constant

	this.accel = createVector(0,0);//create acceleration vector

	//some more (sigh) trig
	//to create a vector for our velocity
	this.velocity = createVector(
		this.bulletSpeed*sin(angle),
		this.bulletSpeed*-cos(angle));
	
	//but we still need to add the velocity of the ship
	//because physics
	this.velocity.add(initVel);

	//and then this is the position of the laser in space
	this.pos = createVector(pos.x,pos.y);

	//this is the position of the laser on the screen
	this.screenPos = createVector(this.pos.x,this.pos.y);

	//this is where we draw the laser
	this.draw = function(){
		push();
		translate(this.screenPos.x,this.screenPos.y);//move to screen position
		stroke(255);//stroke color is white
		strokeWeight(4);//make the stroke weight stronger
		//because we want to see the laser
		point(0,0);	//draw a point(which is the laser)
		pop();
	}

	this.update = function(){
		//your standard scrolling calculation
		this.screenPos.add(gameVector);

		//standard update procedure
		this.velocity.add(this.accel);
		this.pos.add(this.velocity);

		//and then we want to take the bullet velocity into acccount
		this.screenPos.add(this.velocity);
	}
	this.render = function(){//and then we render the laser
		this.update();//update everything
		this.draw();//then draw 
	}
}