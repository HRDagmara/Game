'use strict';

var paperButton = document.getElementById('paper-button');
var rockButton = document.getElementById('rock-button');
var scissorsButton = document.getElementById('scissors-button');
var newgameButton = document.getElementById('newgame-button');
var output = document.getElementById('output');
var arr = ['paper', 'rock', 'scissors'];

var computerChoice;
var playerChoice;
var computerCounter=0;
var playerCounter=0; 
var roundsOfWin;
var results;
var params = {
  computerChoice: [1,2,3],
  playerChoice:  [1,2,3],
  computerCounter: 0,
  playerCounter: 0,
  roundsOfWin: 'Ile rund chciałbyś zagrać?',
  progress: []
}

toggleButton(true);

function playerMove() {
  computerChoice = Math.floor((Math.random() * 3) +1);
  
  if (playerChoice == computerChoice) {
    output.innerHTML = 'DRAW!you played the same!';
  } else if (
   (playerChoice== 1 && computerChoice == 2)
    ||
    (playerChoice== 2 && computerChoice == 3)
    ||
    (playerChoice== 3 && computerChoice == 1)
  ) {
    output.innerHTML = 'YOU WON';
    playerCounter++;
  } else {
    output.innerHTML = 'Computer WON';
    computerCounter++;
  }
  params.progress.push ({
    ruchGracza: arr[playerChoice - 1],
    ruchKomputera: arr[computerChoice - 1],
    wynikRundy: +playerCounter+ ':' +computerCounter
  })
}
                         
newgameButton.addEventListener('click', function(){
  roundsOfWin = window.prompt('Ile rund chciałbyś zagrać?');
  toggleButton(false);
});

var buttons = document.querySelectorAll('.player-move');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    playerChoice = this.getAttribute('data-move');
    play();
  });
}

function gameOver() {
  
  if ((playerCounter==roundsOfWin) || (computerCounter==roundsOfWin)) {
    output.innerHTML = 'Game over, please press the new game button!';
    toggleButton(true);
  }
    
  var addTable = '';

  for (var i=0; i<params.progress.length; i++) {
    addTable += '<tr><td class="numberround">' +(i+1)+'</td><td class="playermove">' + params.progress[i].ruchGracza +'</td><td class="computermove">' + params.progress[i].ruchKomputera +'</td><td class="win">' + params.progress[i].wynikRundy +'</td></tr>';
  }
  document.querySelector('#table table').innerHTML=addTable;
}

var play = function() {
  playerMove();
  gameOver();
}

function toggleButton(state) {
  paperButton.disabled = state;
  rockButton.disabled = state;
  scissorsButton.disabled = state;
}
