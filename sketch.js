var hr, min, sec;
var hrAngle, minAngle, secAngle;

function setup() {
  createCanvas(800, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);  

  translate(200, 200);
  rotate(-90);

  hr = hour();
  min = minute();
  sec = second();

  secAngle = map(sec, 0, 60, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  hrAngle = map(hr%12, 0, 12, 0, 360);

  push();

  rotate(secAngle);

  stroke('red');
  strokeWeight(7);

  line(0, 0, 100, 0);

  pop();


  push();

  rotate(minAngle);

  stroke('blue');
  strokeWeight(7);

  line(0, 0, 75, 0);

  pop();


  push();

  rotate(hrAngle);

  stroke('green');
  strokeWeight(7);

  line(0, 0, 50, 0);

  pop();


  stroke('black');

  point(0, 0);

  strokeWeight(10);
  noFill();

  stroke('red');
  arc(0, 0, 300, 300, 0, secAngle);


  stroke('blue');
  arc(0, 0, 280, 280, 0, minAngle);


  stroke('green');
  arc(0, 0, 260, 260, 0, hrAngle);

  drawSprites();
}