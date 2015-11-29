
/*
  • Just Testing p5
  • checking vars
  • checking export
  • rectangle follow mouse - CENTER
*/


// global vars
var s = 50;

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(50);
  rectMode(CENTER);
  rect(mouseX,mouseY,s,s);
}