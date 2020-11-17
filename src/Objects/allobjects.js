//container variables for some objects
var base; 
var ship;
var asteroids = [];
var border;

function renderAll(){
  ship.render();//render the ship

  for(var i=0; i<ship.lasers.length; i++){//render lasers
	  ship.lasers[i].render();//each one in the array
  }
  

  for(var i=0; i<asteroids.length; i++){//render asteroids
	  asteroids[i].render();//each one in the array
	}
  
  base.render(); //render the base
  border.render(); //render the border

}