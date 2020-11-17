function createAll(){
  ship = new Ship();//create the ship as a Ship object

  base = new Base(); // this is just where we start

  border = new Border(); //this is the visual representation of where the border is
  var j = 0;  
  for(var i=0; i<30; i++){ //create some asteroids
	asteroids[i] = new asteroid();
  }

}