function keyPressed(){
  if (keyCode == 65){
    ship.dtheta = -4;

  }else if(keyCode == 68){
    ship.dtheta = 4;
  }else if(keyCode == 087){
	ship.thrusting(true);
  }else if(keyCode == ENTER){
	  ship.isFiring = true;
  
}
}
function keyReleased(){
    if (keyCode == 65){
    ship.dtheta = 0;
  }else if(keyCode == 68){
    ship.dtheta = 0;

  }else if(keyCode == 087){
    //ship.accel.set(0,0);
	ship.thrusting(false);
  }
}


