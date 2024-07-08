 function playGame(playerInput){

 let randomNumber = Math.floor(Math.random() * 3+1);
let computerMove = getMoveName(randomNumber);
let playerMove = getMoveName(playerInput);
 

 const getMoveName = function(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    }else if(argMoveId == 2){
        return 'papier';
    }else if(argMoveId == 3){
        return 'nożyce';
    }else{
        printMessage('Nie znam ruchu o id'+ argMoveId+ '_');
        return 'nieznany ruch'
    }}

  

 const displayResult = function(argComputerMove,argPlayerMove){
    clearMessages();
    printMessage(' Zagrałem '+ argComputerMove +  ' a ty ' + argPlayerMove);

 if(argComputerMove == 'kamień' && argPlayerMove =='papier'){
    printMessage('Ty wygrywasz');
 } else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    printMessage('Przegrywasz');

 } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    printMessage('Ty wygrywasz');
 } else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
    printMessage('Przegrywasz');

 } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    printMessage('Ty wygrywasz');
 } else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
    printMessage('Przegrywasz');

} else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
    printMessage('Remis');
} else if(computerMove == 'papier' && argPlayerMove == 'papier'){
    printMessage('Remis');
} else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
    printMessage('Remis');

} else if(argComputerMove == 'kamień' && argPlayerMovee == 'nieznany ruch'){
    printMessage('Proszę wybrać 1 2 lub 3');
} else if(argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
    printMessage('Proszę wybrać 1 2 lub 3');
} else if(argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
    printMessage('Proszę wybrać 1 2 lub 3');
    

}};
displayResult(computerMove, playerMove);

      




}




let playRock = document.getElementById('play-rock');
let playPaper = document.getElementById('play-paper');
let playScissors = document.getElementById('play-scissors')

playRock.addEventListener('click', function() { playGame(1) });
playPaper.addEventListener('click', function() { playGame(2) });
playScissors.addEventListener('click', function() { playGame(3) });




