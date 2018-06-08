var clicks=localStorage.getItem('clicks');;
var cpc=localStorage.getItem('cpc');;
var cost=localStorage.getItem('cost');;
function startup() {
  if(clicks==null) {
    clicks=0;
    cpc=1;
    cost=10;
  }
  write( "Clicks = "+clicks,"clicks");
  document.getElementById("buy").innerHTML = "Price = "+cost+" clicks";
  document.getElementById("cpc").innerHTML = "Clicks per click = "+cpc;
  localStorage.setItem('clicks', clicks);
  localStorage.setItem('cpc', cpc);
  localStorage.setItem('cost', cost);
}
function klik() {
  clicks+=cpc;
  startup();
}
function buycpc() {
  if(clicks>=cost) {
    clicks-=cost;
    cost = Math.round(Math.pow(cost,1.2));
    cpc++;
  }
  startup();
}
function write(txt,id) {
  document.getElementById(id).innerHTML=txt;
}
