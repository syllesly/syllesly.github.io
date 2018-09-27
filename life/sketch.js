var lifes=[];
var t=0;
var oldLifes=[];
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noStroke();
  for(var x=0;x<width/10;x++) {
    lifes[x]=[];
    oldLifes[x]=[];
    for(var y=0;y<height/10;y++) {
      if(random(0,1)<0.1) {
        lifes[x][y]=true;
      }else{
        lifes[x][y]=false;
      }
    }
  }
}

function draw() {
  t++;
  newToOld();
  background(0);
  if(t%5==0) {
  	c();
  }
  d();
}
