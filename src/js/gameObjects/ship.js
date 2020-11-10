function Ship(){
  this.pos = createVector(width/2,height/2);
  this.velocity = createVector(0,0);
  this.r = 20;
  this.theta = 0;
  this.dtheta = 0;
  this.speed = 0.05;
  this.accel = createVector(0,0);
  this.isThrusting = false;
  this.lasers = [];
  this.isFiring = false;
  angleMode(DEGREES);



  this.thrusting = function(b){ //set whether we are thrusting or not
	  this.isThrusting = b;
  }



  this.thrust = function(){ //thrust in direction
	//DON'T MESS WITH THE TRIG!!!
	this.accel.set(this.speed*sin(this.theta),
                      ship.speed*-cos(this.theta));
  }



  this.stopThrust = function(){ //set acceleration to 0
	  this.accel.set(0,0); 
  }



  this.update = function(){
	  if (this.isThrusting){ //if we are thrusting
		  this.thrust(); //then we thrust
	  }else{
		  this.stopThrust(); //otherwise we set acceleration to 0 because we are not thrusting
	  }
	this.theta += this.dtheta;
	this.velocity.add(this.accel);
    this.pos.add(this.velocity);
  }



  this.draw = function(){ //this draws the ship
	push();
    stroke(255); //white stroke
    noFill(); //don't fill
    //translate(this.pos.x,this.pos.y);//move to the position
	translate(width/2,height/2);
    rotate(this.theta);//rotate 
    
	quad( //draw the ship DON'T MESS WITH THIS
		0,-this.r,
		(3/5)*this.r,(4/5)*this.r,
		0,(3/5)*this.r,
		(-3/5)*this.r,(4/5)*this.r
	);
	if(this.isThrusting){
		fill(255);
		quad(
			0,(3/5)*this.r,
			(1.5/5)*this.r,(3.5/5)*this.r,
			0,(6/5)*this.r,
			(-1.5/5)*this.r, (3.5/5)*this.r
		);
		noFill();
	}if(this.isFiring){
		this.lasers.push(new Laser(createVector(width/2+this.r*sin(this.theta),height/2-this.r*cos(this.theta)),this.theta));
		this.isFiring = false;
	}
	ellipse(0,-this.r,10); //this is the center of rotation
	
	pop();
  }



  this.render = function(){ //called every frame
	this.update(); //update positions
	this.draw(); //draw the ship  
  }


}