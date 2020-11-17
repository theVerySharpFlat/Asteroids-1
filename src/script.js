

//constants
//these are the width of the game playing field
var GAMEWIDTH;
var GAMEHEIGHT;
var width;
var height;

function setup() {
  width = windowWidth; //just some more constants
  height = windowHeight;// so that we don't have to call this a billion times

  GAMEWIDTH = width*2; //it's all to scale
  GAMEHEIGHT = height*2;

  createCanvas(width, height); //create the canvas

  createAll(); //create all the objects

  gameVector = createVector(0,0);//create the game vector
}

function draw() {
  strokeWeight(3); //make the lines a little thicker
  background(0); //make the background black (cuz it's asteroids(duh))
  renderAll(); //now we draw everything
  handleCollision();
  firstTimeRender = false;
}