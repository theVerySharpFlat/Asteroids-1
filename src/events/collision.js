var firstTimeRender = true;
function handleCollision(){
	asteroidBaseCollision();
}

function asteroidBaseCollision(){
	for(var i=0; i<30; i++){ //create some asteroids
		// and add them to the array of all of our asteroids
		while(true){
		hit = collideCirclePoly(base.screenPos.x,base.screenPos.y,base.r,asteroids[i].points);
		//console.log(base.screenPos.x,base.screenPos.y);
		///console.log(hit);
		if(hit == true){
			if (firstTimeRender){
				asteroids[i].reset();
			}else{
				asteroids[i].velocity.mult(-1);
				break;
			}
		}else{
			break;
		}
		}

	
  }
}
