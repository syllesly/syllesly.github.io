var t=0;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noStroke();
  noCursor();
}

function draw() {
  t+=0.1;
  background(220);
  for(var i=0;i<3.1415*2;i+=3.1415*2/10) {
    fill(255,255,255,i*25);
    ellipse(sin(t+i)*height/30+mouseX,cos(t+i)*height/30+mouseY,height/60,height/60);
  }
}
