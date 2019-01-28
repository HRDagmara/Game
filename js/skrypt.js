'use strict';

var paperButton = document.getElementById('paper-button');
var rockButton= document.getElementById('rock-button');
var scissorsButton = document.getElementById('scissors-button');
var newgameButton= document.getElementById('newgame-button');
var output= document.getElementById('output');
var modalOne=document.getElementById('modal-one');

var computerChoice;
var playerChoice;
var computerCounter=0;
var playerCounter=0; 
var roundsOfWin;
var results;

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
  function results() = params.progress.push ({
      numerRundy: [1,2,...,+roundsOfWin+],
      ruchGracza: +playerChoice+,
      ruchKomputera: +computerChoice+,
      wynikRundy: '<br/>' + playerCounter + ':' + computerCounter,
  })
}();

function gameOver() {
  console.log(roundsOfWin);
  if ((playerCounter==roundsOfWin) || (computerCounter==roundsOfWin)){
    modalOne.innerHTML = 'Game over, please press the new game button!';
    var addTable = '';

    for (var i=0; i<params.progress.length; i++) {
    addTable += '<td class="numberround">' + params.progress[i].numerRundy +'</td>''<td class="playermove">' + params.progress[i].ruchGracza +'</td>''<td class="computermove">' + params.progress[i].ruchKomputera +'</td>''<td class="win">' + params.progress[i].wynikRundy +'</td>';
    }
  
    document.write(addTable);
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
 	roundsOfWin = window.prompt('Ile rund chciałbyś zagrać?');
});

var buttons = document.querySelectorAll('.player-move');

for (var i=0; i<buttons.lenght; i++) {
  function playerMove() {
        buttons.getAttribute("data-move");
  }
}

var params = {
      params.computerChoice: ['1','2','3'],
      params.playerChoice:  ['1','2','3'],
      params.computerCounter: 0,
      params.playerCounter: 0,
      params.roundsOfWin: 'Ile rund chciałbyś zagrać?',
      params.progress: [],
};

(function(){ 
var showModal = function(event){
  event.preventDefault();
  document.querySelector('#modal-overlay').classList.add('show');
};
  
var modalLinks = document.querySelectorAll('.show-modal');
  
for(var i = 0; i < modalLinks.length; i++){
    modalLinks[i].addEventListener('click', showModal);
}

var hideModal = function(event){
  event.preventDefault();
  document.querySelector('#modal-overlay').classList.remove('show');
  table.innerHTML='',
  params.progress.length=0;
};
  
var closeButtons = document.querySelectorAll('.modal .close');
  
for(var i = 0; i < closeButtons.length; i++){
    closeButtons[i].addEventListener('click', hideModal);
}
  
document.querySelector('#modal-overlay').addEventListener('click', hideModal); 
  
var modals = document.querySelectorAll('.modal');
  
for(var i = 0; i < modals.length; i++){
  modals[i].addEventListener('click', function(event){
  event.stopPropagation();
    });
  }
})()