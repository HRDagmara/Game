'use strict';

var paperButton = document.getElementById('paper-button');
var rockButton= document.getElementById('rock-button');
var scissorsButton = document.getElementById('scissors-button');
var newgameButton= document.getElementById('newgame-button');
var output= document.getElementById('output');

var computerChoice;
var playerChoice;
var computerCounter=0;
var playerCounter=0; 
var roundOfWin;

function playerMove() {
  computerChoice = Math.floor((Math.random() * 3) +1);
  
  if (playerChoice === computerChoice) {
    output.innerHTML = 'DRAW!you played the same!';
  } else if (
   (playerChoice=== 1 && computerChoice === 2)
    ||
    (playerChoice=== 2 && computerChoice === 3)
    ||
    (playerChoice=== 3 && computerChoice === 1)
  ) {
    output.innerHTML = 'YOU WON';
    playerCounter++;
  } else {
    output.innerHTML = 'Computer WON';
    computerCounter++;
  }
  output.innerHTML += '<br />' + playerCounter + ':' + computerCounter;
}


function gameOver() {
  console.log(roundsOfWin);
  
   if ((playerCounter==roundsOfWin) || (computerCounter==roundsOfWin)){
    output.innerHTML = 'Game over, please press the new game button!';
  }
}

var play = function() {
  playerMove();
  gameOver();
}

paperButton.addEventListener('click', function() {
  playerChoice = 1;
  play();
});

rockButton.addEventListener('click', function() {
  playerChoice = 2;
  play();
 }); 

scissorsButton.addEventListener('click', function() {
  playerChoice= 3;
  play();
});
                                
newgameButton.addEventListener('click', function(){
 	roundsOfWin=window.prompt('Ile rund chciałbyś zagrać?');
});