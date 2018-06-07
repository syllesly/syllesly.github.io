var clicks=0;
var cpc=1;
var cost=10;
function startup() {
  document.getElementById("clicks").innerHTML = "Clicks = "+clicks;
  document.getElementById("buy").innerHTML = "Buy clicks per click  "+cost+" clicks";
  document.getElementById("cpc").innerHTML = "Clicks per clicks= "+cpc;
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
