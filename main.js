var kingdomName = " ";
var grainPerClick = 1;
var grain = 0;
var upgrade1 === true;


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
  grain += 1;
  document.getElementById("grainNumber").innerHTML = grain;
  if(upgrade1 === true){
    if(grain >= 50){
      upgrade1 === false;
      alert("Your modest town begins attracting wanderers who offer you advice and farming tools for a price.  This could increase our wheat production!");
      document.getElementById("grainYieldUpgrade").className = " ";
      document.getElementById("yieldLevel").className = " ";
    }
  }
}
