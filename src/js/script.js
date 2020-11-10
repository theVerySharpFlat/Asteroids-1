var base;
var ship;
var asteroids = [];
var border;
var gameVector;
var GAMEWIDTH;
var GAMEHEIGHT;

function setup() {
  var width = windowWidth;
  var height = windowHeight;
  GAMEWIDTH = width*3;
  GAMEHEIGHT = height*3;

  createCanvas(width, height);

  createAll();

  gameVector = createVector(0,0);
}

function draw() {
  background(0);
  renderAll();
  

}
function createAll(){
  ship = new Ship();

  for(var i=0; i<30; i++){
    asteroids.push(new asteroid());
  }

  base = new Base();
  border = new Border();
}

function renderAll(){
  ship.render();
  for(var i=0; i<ship.lasers.length; i++){
	  ship.lasers[i].render();
  }
  gameVector.set(ship.velocity.x*(-1),ship.velocity.y*(-1));
  for(var i=0; i<asteroids.length; i++){
	  asteroids[i].render();
  }
  base.render();
  border.render();
}





