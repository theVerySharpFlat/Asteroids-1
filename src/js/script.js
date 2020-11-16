//container variables for some objects
var base; 
var ship;
var asteroids = [];
var border;
var hit = false;

//this is the vector at which all objects move on the screen because the ship is "moving"
var gameVector;

//constants
//these are the width of the game playing field
var GAMEWIDTH;
var GAMEHEIGHT;

function setup() {
  var width = windowWidth; //just some more constants
  var height = windowHeight;// so that we don't have to call this a billion times

  GAMEWIDTH = width*3; //it's all to scale
  GAMEHEIGHT = height*3;

  createCanvas(width, height); //create the canvas

  createAll(); //create all the objects

  gameVector = createVector(0,0);//create the game vector
}

function draw() {
  strokeWeight(3); //make the lines a little thicker
  background(0); //make the background black (cuz it's asteroids(duh))
  renderAll(); //now we draw everything

}
function createAll(){
  ship = new Ship();//create the ship as a Ship object

  base = new Base(); // this is just where we start

  border = new Border(); //this is the visual representation of where the border is
  var j = 0;  
  collideDebug(true);
  for(var i=0; i<30; i++){ //create some asteroids
	asteroids[i] = new asteroid();
  }

}



function renderAll(){
  ship.render();//render the ship

  for(var i=0; i<ship.lasers.length; i++){//render lasers
	  ship.lasers[i].render();//each one in the array
  }
  
  gameVector.set(ship.velocity.x*(-1),ship.velocity.y*(-1));//update the game vector
  //it's just the oposite of the ship's velocity
  //because when you move forward everything moves backward

  for(var i=0; i<asteroids.length; i++){//render asteroids
	  asteroids[i].render();//each one in the array
	}
  
  base.render(); //render the base
  border.render(); //render the border

  for(var i=0; i<30; i++){ //create some asteroids
		// and add them to the array of all of our asteroids
	hit = collideCirclePoly(base.screenPos.x,base.screenPos.y,base.r,asteroids[i].points);
	//console.log(base.screenPos.x,base.screenPos.y);
	///console.log(hit);
	if(hit == true){
		ellipse(width/2,height/2,20);
	}

	
  }
}





