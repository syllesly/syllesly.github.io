var col=[
    {
        r: [0,0],
        g: [100,255],
        b: [100, 255]
    },
    {
        r: [200,255],
        g: [0,255],
        b: [0, 0]
    },
    {
        r: [100,255],
        g: [0,0],
        b: [100, 255]
    },
    {
        r: [0,50],
        g: [0,255],
        b: [0, 50]
    }
]
function mousePressed() {
    r[r.length]={
      x:mouseX,
      y:height,
      destY:mouseY,
      alive:true,
      speed:5
    }
  }
function explode(rnr) {
    var len=p.length;
    var h=floor(random(0,100));
    var h2=(h+(floor(random(0,2))*20-10))%100;
    for(i=len;i<len+ap;i++) {
        var vinkel=(i-len)/ap*6.28;
        var sp=random(0.9,1.1);
        colorMode(HSL,100,100,100);
        p[i]={
            x:rnr.x,
            y:rnr.y,
            xSpeed:sin(vinkel)*sp,
            ySpeed:cos(vinkel)*sp,
            a:random(100,255),
            c:color(floor(random(h,h2)),100,50)
        }
        p[i].x+=p[i].xSpeed;
        p[i].y+=p[i].ySpeed;
    }
}
