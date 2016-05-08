var kingdomName = " ";
var grainPerClick = 1;
var grain = 0;
var grainYieldLevel = 1;
var upgrade1 = true;
var grainSellPrice = 0.5;
var money = 0;

function startGame() {
  var gameStartPrompt = prompt("Welcome! Please Choose a Name For Your Kingdom to Begin!");
  kingdomName = gameStartPrompt;
  document.getElementById("kingdomName").innerHTML = kingdomName;
  document.getElementById("startButton").className += "hidden";
  document.getElementById("background").className = "gameBackground";
  document.getElementById("grainStore").className = " ";
  document.getElementById("grainButton").className = " ";
  document.getElementById("grainSellPrice").className = " ";
  document.getElementById("grainSellButton").className = " ";
  document.getElementById("money").className = " ";
  document.getElementById("moneyBox").className = " ";
}
function getGrain() {
  grain += grainYieldLevel;
  document.getElementById("grainNumber").innerHTML = grain;
  if(upgrade1 === true){
    if(money >= 10){
      upgrade1 = false;
      alert("Your modest town begins attracting wanderers who offer you advice and farming tools for a price.  This could increase our wheat production!");
      document.getElementById("grainYieldUpgrade").className = " ";
      document.getElementById("yieldLevel").className = " ";
    }
  }
  }

function sellGrain() {
  money += grain * grainSellPrice;
  grain = 0;
  document.getElementById("money").innerHTML = money;
  document.getElementById("grainNumber").innerHTML = grain;
}

//function upgradeGrainYield {
  
//}
