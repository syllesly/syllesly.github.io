var clicks=0;
var cpc=1;
var cost=10;
function startup() {
  document.getElementById("clicks").innerHTML = "Clicks = "+clicks;
  document.getElementById("buy").innerHTML = "Buy clicks per click  "+cost+" clicks";
}
function klik() {
  clicks+=cpc;
  startup();
}
function buycpc() {
  if(clicks>=cost) {
    clicks-=cost;
    cost = Math.round(Math.pow(cost,1.1));
    cpc++;
  }
  startup();
}
