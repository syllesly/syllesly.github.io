function neighb(x,y) {
  var val=0;
  for(var i=-1;i<2;i++) {
    for(var j=-1;j<2;j++) {
      if(!(i==0 && j==0)) {
        if(x+i<oldLifes.length && x+i>=0 && y+i<oldLifes[x].length && y+i>=0) {
          if(oldLifes[x+i][y+j]){
            val++;
        	}
        }
      }
    }
  }
  return val;
}

function d() {
  fill(255);
  for(var x=0;x<lifes.length;x++){
    for(var y=0;y<lifes[x].length;y++) {
      if(lifes[x][y]) {
        var w=width/lifes.length;
        var h=height/lifes[x].length;
        rect(x*w,y*h,w+1,h+1);
      }
    }
  }
}

function c() {
  for(var x=0;x<oldLifes.length;x++) {
    for(var y=0;y<oldLifes[x].length;y++) {
      if(oldLifes[x][y]) {
        if(neighb(x,y)<2 || neighb(x,y)>3){
					lifes[x][y]=false;
        }
      }else if(neighb(x,y)==3){
        lifes[x][y]=true;
      }
    }
  }
}
function newToOld() {
  for(var x=0;x<lifes.length;x++) {
    for(var y=0;y<lifes[x].length;y++) {
      oldLifes[x][y]=lifes[x][y];
    }
  }
}
