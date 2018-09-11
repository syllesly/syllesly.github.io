var p=[];
var r=[];
var ap=50;
var curs;
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    noStroke();
}

function draw() {
    colorMode(RGB,255);
    background(0,0,0,70);
    for(var j=0;j<r.length;j++) {
        if(r[j].alive) {
        if(r[j].y>r[j].destY+r[j].speed) {
            r[j].y-=r[j].speed;
            fill(255);
            ellipse(r[j].x,r[j].y,10);
        }else{
            explode(r[j]);
            r[j].alive=false;
            r.splice(j,1);
        }
        }
    }
    for(var i=0;i<p.length;i++) {
        fill(p[i].c);
        ellipse(p[i].x,p[i].y,10);
        p[i].x+=p[i].xSpeed*2;
        p[i].y+=p[i].ySpeed*2;
        p[i].a-=2;
        p[i].xSpeed*=0.99;
        //p[i].ySpeed*=0.995;
        p[i].ySpeed+=0.015;
        if(p[i].a<=0) {
            p.splice(i,1);
        }
    }
}
