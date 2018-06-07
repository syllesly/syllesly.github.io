var clicks=0;
document.getElementById("id").innerHTML = "CLICKS = 0";
function klik() {
  clicks++;
  document.getElementById("id").innerHTML = "CLICKS = "+clicks;
}
