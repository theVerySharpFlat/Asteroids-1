function asteroidBaseCollision(){
	for(var i=0; i<30; i++){ //create some asteroids
		// and add them to the array of all of our asteroids
		hit = collideCirclePoly(base.screenPos.x,base.screenPos.y,base.r,asteroids[i].points);
		//console.log(base.screenPos.x,base.screenPos.y);
		///console.log(hit);
		if(hit == true){
			if (firstTimeRender){
				
			}else{
				ellipse(width/2,height/2,20);
			}
		}

	
  }
}