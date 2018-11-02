var bird;
var nrPipes=2;
var pipes=[];
var c=true;
function setup() {
	createCanvas(600, 400);
	bird=new Bird();
	noStroke();
	bird.update();
	for(var i=0;i<nrPipes;i++) {
		pipes[i]=new Pipe(width+i*(width/nrPipes));
	}
}

function draw() {
	background(220);
	bird.jump();
	bird.update();
	bird.col();
	bird.show();
	for(var i=0;i<pipes.length;i++) {
		pipes[i].update();
		pipes[i].show();
		if(pipes[i].out()) {
			pipes[i]=new Pipe(width);
		}
	}
	if(!bird.alive) {
		fill(100);
		textAlign(CENTER);
		text('YOU ARE DEAD',width/2,height/2);
	}
}
function Bird() {
	this.vel=0;
	this.acc=0.07;
	this.y=height/2;
	this.x=width/4;
	this.rad=15;
	this.alive=true;
	this.update=() => {
		this.vel+=this.acc;
		this.y+=this.vel;
		if(this.y>=height){
			this.y=height;
			this.vel=0;
		}
		if(this.y<=0){
			this.y=0;
			this.vel=0;
		}
	}
	this.show=() => {
		fill(0,70,70);
		ellipse(this.x,this.y,this.rad*2);
	}
	this.jump=() => {
		if(mouseIsPressed && this.alive) {
			if(c){
				this.vel=-3;
				c=false;
			}
		}else{
			c=true;
		}
	}
	var n=this;
	this.col=() => {
		var t=false;
		for(var i=0;i<pipes.length;i++) {
			if(collis(n.x,n.y,pipes[i].x,0,pipes[i].w,pipes[i].upY)<n.rad) {
				t=true;
			}
			if(collis(n.x,n.y,pipes[i].x,pipes[i].downY,pipes[i].w,height-pipes[i].upY)<n.rad) {
				t=true;
			}
		}
		if(t) {
			this.alive=false;
			if(this.vel<0) {
				this.vel=0;
			}
		}
	}
}
function Pipe(x) {
	this.x=x;
	this.upY=random(30,height-130);
	this.downY=this.upY+100;
	this.w=40;
	this.update=() => {
		if(bird.alive) {
			this.x-=3;
		}
	}
	this.show=() => {
		fill(0);
		rect(this.x,0,this.w,this.upY);
		rect(this.x,this.downY,this.w,height-this.downY);
	}
	this.out=() => {
		var o=false;
		if(this.x+this.w<=0) {
			o=true;
		}
		return o;
	}
}
function collis(X1,Y1,X2,Y2,W,H) {
	var s;
	var elX=X1;
	var elY=Y1;
	var r={
		x1:X2,
		y1:Y2,
		x2:X2+W,
		y2:Y2+H,
		w:W,
		h:H
	}
	if(!(elX>r.x1 && elX<r.x2 && elY>r.y1 && elY<r.y2)) {
		if(elX<r.x1 && elY>r.y1 && elY<r.y2) {
			s=dist(elX,elY,r.x1,elY);
		}
		if(elX>r.x2 && elY>r.y1 && elY<r.y2) {
			s=dist(elX,elY,r.x2,elY);
		}
		if(elY<r.y1 && elX>r.x1 && elX<r.x2) {
			s=dist(elX,elY,elX,r.y1);
		}
		if(elY>r.y2 && elX>r.x1 && elX<r.x2) {
			s=dist(elX,elY,elX,r.y2);
		}
		if(elX<r.x1 && elY<r.y1) {
			s=dist(elX,elY,r.x1,r.y1);
		}
		if(elX>r.x2 && elY<r.y1) {
			s=dist(elX,elY,r.x2,r.y1);
		}
		if(elX>r.x2 && elY>r.y2) {
			s=dist(elX,elY,r.x2,r.y2);
		}
		if(elX<r.x1 && elY>r.y2) {
			s=dist(elX,elY,r.x1,r.y2);
		}
	}else{
		s=0;
	}
	return s;
} 
