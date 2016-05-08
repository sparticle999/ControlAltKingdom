var kingdomName = " ";
var grainPerClick = 1;
var grain = 0;
var grainYieldLevel = 1;
var upgradeGrainYieldPrice = 15;
var upgrade1 = true;
var grainSellPrice = 0.5;
var money = 0;
var upgradeGrainPricePrice = 20;
var grainPriceLevel = 1;
var upgrade2 = true;
var upgrade3 = true;

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
  if(upgrade2 === true){
    if(money >= 100){
      upgrade2 = false;
      alert("The local merchants and farmers like the look of your grain! You can increase the price of your grain!");
      document.getElementById("grainPriceUpgrade").className = " ";
    }
  }
}

function upgradeGrainYield() {
  if(money >= upgradeGrainYieldPrice) {
    money -= upgradeGrainYieldPrice;
    upgradeGrainYieldPrice = Math.floor(upgradeGrainYieldPrice * 1.5);
    grainYieldLevel += 1;
    document.getElementById("upgradeGrainYieldPrice").innerHTML = upgradeGrainYieldPrice;
    document.getElementById("money").innerHTML = money;
    document.getElementById("grainYieldLevel").innerHTML = grainYieldLevel;
  }
}
function upgradeGrainPrice() {
  if(upgrade3 === true) {
    if(money >= 300){
      upgrade3 = false;
      alert("Your Town is growing rapidly! your numbers are increasing and it is time that some policies were enacted!");
      document.getElementById("goToResearch").className = " ";
    }
  }
  if(money >= upgradeGrainPricePrice) {
    money -= upgradeGrainPricePrice;
    upgradeGrainPricePrice = Math.floor(upgradeGrainPricePrice * 1.5);
    grainPriceLevel = (grainPriceLevel += 1);
    grainSellPrice = (grainPriceLevel * 0.5);
    document.getElementById("money").innerHTML = money;
    document.getElementById("grainSellPrice").innerHTML = grainSellprice;
    document.getElementById("upgradeGrainPricePrice").innerHTML = upgradeGrainPricePrice;
  }
}
function goToResearch() {
  document.getElementById("moneyBox").className = "hidden";
  document.getElementById("grainButton").className = "hidden";
  document.getElementById("grainSellButton").className = "hidden";
  document.getElementById("grainStore").className = "hidden";
  document.getElementById("grainYieldUpgrade").className = "hidden";
  document.getElementById("welcomingHeading").className = "hidden";
  document.getElementById("yieldLevel").className = "hidden";
  document.getElementById("grainPriceUpgrade").className = "hidden";
  document.getElementById("researchButton").className = "hidden";
}
