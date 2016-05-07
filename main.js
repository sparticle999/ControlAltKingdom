var kingdomName = " ";
var grainPerClick = "1";
var grain = "0";


function startGame() {
  var gameStartPrompt = prompt("Welcome! Please Choose a Name For Your Kingdom to Begin!");
  kingdomName = gameStartPrompt;
  document.getElementById("kingdomName").innerHTML = kingdomName;
  document.getElementById("startButton").className += "hidden";
  document.getElementById("background").className = "gameBackground";
  document.getElementById("grainStore").className = " ";
  document.getElementById("grainButton").className = " ";
  
}
function getGrain() {
  grain += grainPerClick;
  document.getElementById("grain").innerHTML = grain;
}
