
/*
  • Just Testing p5
  • checking vars
  • checking export
  • rectangle follow mouse - CENTER
*/


// global vars
var s = 50;

function setup() {
  createCanvas(400,600);
}

function draw() {
  //background(0);
  // ellipse
  ellipseMode(CENTER);
  noFill();
  stroke(100,10);
  strokeWeight(2);
  ellipse(mouseX,mouseY,s,s);
}

function keyPressed(){
  background(255,255,255);
  return false; // prevent any default behaviour
}