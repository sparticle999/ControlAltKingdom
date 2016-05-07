var kingdomName = " "


function startGame() {
  var gameStartPrompt = prompt("Welcome! Please Choose a Name For Your Kingdom to Begin!");
  kingdomName = gameStartPrompt;
  document.getElementById("kingdomName").innerHTML = kingdomName;
  
}
if kingdomName !== " " {
  document.getElementById("startButton").className ="hidden";
}
