var lifes = [];
var t = 0;
var oldLifes = [];
var speedSlider;
var show=false;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noStroke();
  speedSlider=createSlider(0,20,15);
  for (var x = 0; x < width / 10; x++) {
    lifes[x] = [];
    oldLifes[x] = [];
    for (var y = 0; y < height / 10; y++) {
      if(random(0,1)<0.1) {
        lifes[x][y]=true;
      }else{
        lifes[x][y]=false;
      }
    }
  }
}

function draw() {
  if(show) {
    speedSlider.position(10,10);
  }else{
    speedSlider.position(-2000,0);
  }
  var speed=21-float(speedSlider.value());
  t++;
  newToOld();
  background(0);
  if (t % speed == 0) {
    c();
  }
  d();
}
function keyPressed() {
  if(key=="s") {
	show=!show;
  }
}
