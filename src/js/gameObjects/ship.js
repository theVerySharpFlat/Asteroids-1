function Ship(){
  //a bunch of variables that contain details about our location
  this.pos = createVector(width/2,height/2);
  this.velocity = createVector(0,0);
  this.r = 20;
  this.theta = 0;
  this.dtheta = 0;
  this.speed = 0.05;
  this.accel = createVector(0,0);

  //some support for shooting lasers
  this.isThrusting = false;
  this.isFiring = false;
  this.lasers = [];

  //this is just where we draw the ship on the screen
  this.screenPos = createVector(width/2,height/2);

  //these will contain the points of our ship
  this.points = [];
  this.flamePoints = [];

//we gotta use actual coordinates not rotating the canvas
//this took a while to figure out on graph paper
//but for some stupid reason it works
	this.points.push(createVector(this.screenPos.x,this.screenPos.y-this.r));

	this.points.push(createVector(
		this.screenPos.x+(3/5)*this.r,this.screenPos.y+(4/5)*this.r));

	this.points.push(createVector(
		this.screenPos.x,this.screenPos.y+(3/5)*this.r
	));

	this.points.push(createVector(
		this.screenPos.x-(3/5)*this.r,this.screenPos.y+(4/5)*this.r));
//and now the flame coordinates
//again, done on graph paper
	this.flamePoints.push(createVector(
		this.screenPos.x,this.screenPos.y+(3/5)*this.r));

	this.flamePoints.push(createVector(
		this.screenPos.x+(1.5/5)*this.r,
		this.screenPos.y+(3.5/5)*this.r
	));

	this.flamePoints.push(createVector(
		this.screenPos.x,
		this.screenPos.y+(6/5)*this.r
	));

	this.flamePoints.push(createVector(
		this.screenPos.x+(-1.5/5)*this.r,
		this.screenPos.y+(3.5/5)*this.r
	));
/*---------------------------------------------------*/
//here's where all of the functions are  

  //this gives us internal/external control
  this.thrusting = function(b){ //set whether we are thrusting or not
	  this.isThrusting = b;
  }

  //some more trig (I actually hate trig now)
  //that calculates which direction 
  //we need to thrust in based on our angle
  this.thrust = function(){ //thrust in direction
	//DON'T MESS WITH THE TRIG!!!
	this.accel.set(this.speed*sin(this.theta),
                      ship.speed*-cos(this.theta));
  }

  //for when we release the w key
  this.stopThrust = function(){ //set acceleration to 0
	  this.accel.set(0,0); 
  }

  //update EVERYTHING *sigh*
  this.update = function(){
	  if (this.isThrusting){ //if we are thrusting
		  this.thrust(); //then we thrust
	  }else{
		  this.stopThrust(); //otherwise we set acceleration to 0 because we are not thrusting
	  }
	//update the angle we are at
	this.theta += this.dtheta;
	
	//then update our velocity
	this.velocity.add(this.accel);
	//and add it to our position
    this.pos.add(this.velocity);
	//"because physics"
  }



  this.draw = function(){ //this draws the ship
    //oh yea, and the flames too
	
    stroke(255); //white stroke
    noFill(); //don't fill because vector graphics
    //translate(this.pos.x,this.pos.y);//move to the position

	this.rotate();//rotates all of the points

	//and then draw them on the screen
	quad(this.points[0].x,this.points[0].y,
		this.points[1].x,this.points[1].y,
		this.points[2].x,this.points[2].y,
		this.points[3].x,this.points[3].y);

	//this just draws the flame when we are thrusting
	if(this.isThrusting){
		fill(255);//we want to fill it with white

		//draw flames with more delecate(and annoying)points
		quad(
			this.flamePoints[0].x,this.flamePoints[0].y,
			this.flamePoints[1].x,this.flamePoints[1].y,
			this.flamePoints[2].x,this.flamePoints[2].y,
			this.flamePoints[3].x,this.flamePoints[3].y,
		);
		noFill();//but then not fill in anything else

	//when we go "pew pew lasers!"
	}if(this.isFiring){
		this.lasers.push(new Laser(this.points[0],this.theta,this.velocity));//add a new laser to the array
		this.isFiring = false;//we don't have automatic weapons YET
	}
	
  }


  //this is what get's called in the script.js (the main js file) to render the ship
  this.render = function(){ //called every frame
	this.update(); //update positions
	this.draw(); //draw the ship  
  }

  //massive amount of disgusting trig to rotate points
  this.rotate = function(){//ROTATION MATH DO NOT TOUCH
	  for(var i=0; i<this.points.length; i++){
		//just a bunch of variables
		//so I don't have to type out "this.points[i]"
		//like 50 times
		var centerX = this.screenPos.x; //center
		var centerY = this.screenPos.y;//coordinates

		var x = this.points[i].x-centerX;//rotation
		var y = this.points[i].y-centerY;//point

		var angle = this.dtheta;//rotation angle

		//this is the math that does things
		//massive thanks to this website:
		//http://danceswithcode.net/engineeringnotes/rotations_in_2d/rotations_in_2d.html
		var x1 = (x*cos(angle) - y*sin(angle))+centerX;
		var y1 =(y*cos(angle) + x*sin(angle))+centerY;

		//then we just set the point to our new points
		this.points[i].set(x1,y1);
	  }
	for(var i=0; i<this.flamePoints.length; i++){
		var centerX = this.screenPos.x;//rotation
		var centerY = this.screenPos.y;//center

		var x = this.flamePoints[i].x-centerX;//rotation
		var y = this.flamePoints[i].y-centerY;//point

		var angle = this.dtheta;//rotation angle

		//again, a massive thanks to the website listed above
		var x1 = (x*cos(angle) - y*sin(angle))+centerX;
		var y1 =(y*cos(angle) + x*sin(angle))+centerY;

		//and set the point to our new set of values
		this.flamePoints[i].set(x1,y1);
		}
  }


}