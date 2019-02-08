'use strict';

var paperButton = document.getElementById('paper-button');
var rockButton = document.getElementById('rock-button');
var scissorsButton = document.getElementById('scissors-button');
var newgameButton = document.getElementById('newgame-button');
var output = document.getElementById('output');
var modalOne = document.getElementById('modal-one');

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
  params.progress.push ({
    ruchGracza: playerChoice,
    ruchKomputera: computerChoice,
    wynikRundy: '<br/>' +playerCounter+ ':' +computerCounter
  })
}
                         
newgameButton.addEventListener('click', function(){
  roundsOfWin = window.prompt('Ile rund chciałbyś zagrać?');
});

var buttons = document.querySelectorAll('.player-move');

for (var i=0; i<buttons.lenght; i++) {
  buttons[i].addEventListener('click', function() {
    playerChoice = buttons[i].getAttribute('data-move');
    play();
  });
}

function gameOver() {
  
  if ((playerCounter==roundsOfWin) || (computerCounter==roundsOfWin)) {
    modalOne.innerHTML = 'Game over, please press the new game button!';
  }
    
  var addTable = '';

  for (var i=0; i<params.progress.length; i++) {
    addTable += '<td class="numberround">' +(i+1)+'</td><td class="playermove">' + params.progress[i].ruchGracza +'</td><td class="computermove">' + params.progress[i].ruchKomputera +'</td><td class="win">' + params.progress[i].wynikRundy +'</td>';
  }
  document.querySelector('#table table').innerHTML=addTable;
}

var play = function() {
  playerMove();
  gameOver();
}

