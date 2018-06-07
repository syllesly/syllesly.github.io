var clicks=0;
var cpc=1;
var cost=10;
function startup() {
  write( "Clicks = "+clicks,"clicks");
  document.getElementById("buy").innerHTML = "Price = "+cost+" clicks";
  document.getElementById("cpc").innerHTML = "Clicks per click = "+cpc;
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