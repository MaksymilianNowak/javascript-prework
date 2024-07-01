let randomNumber = Math.floor(Math.random() * 3+1);

console.log('Wylosowana liczba to: '+ randomNumber);



if (randomNumber == 1){computerMove='kamień';}
if(randomNumber == 2){computerMove='papier';}
if(randomNumber == 3){computerMove='nożyce';}

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: '+ playerInput);

let playerMove = 'nieznany ruch';

if(playerInput =='1'){playerMove = 'kamień';}
if(playerInput =='2'){playerMove = 'papier';}
if(playerInput =='3'){playerMove = 'nożyce';}

printMessage('Twój ruch to: '+ playerMove);

function displayResult(argComputerMove,argPlayerMove){
    printMessage('Zagrałem'+ argComputerMove+ 'a ty'+ argPlayerMove);

if(computerMove == 'kamień' && playerMove =='papier'){
    printMessage('Ty wygrywasz');
} else {if(computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Przegrywasz');

} else {if(computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz');
} else {if(computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Przegrywasz');

} else {if(computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz');
} else {if(computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Przegrywasz');

} else {if(computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis');
} else {if(computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis');
} else {if(computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis');

} else {if(computerMove == 'kamień' && playerMove == 'nieznany ruch'){
    printMessage('Proszę wybrać 1 2 lub 3');
} else {if(computerMove == 'papier' && playerMove == 'nieznany ruch'){
    printMessage('Proszę wybrać 1 2 lub 3');
} else {if(computerMove == 'nożyce' && playerMove == 'nieznany ruch'){
    printMessage('Proszę wybrać 1 2 lub 3');

}}}}}}}}}}}
}
}

let computerMove = getMoveName(randomNumber);

function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    }else{
        printMessage('Nie znam ruchu o id' + argMoveId + '_');
        return 'nieznany ruch';
    }
    }
function getMoveName(argMoveId){
    if(argMoveId == 2){
        return 'papier';
    }else{
        printMessage('Nie znam ruchu o id' + argMoveId+ '_');
        return 'nieznany ruch';

    }
}
function getMoveName(argMoveId){
    if(argMoveId == 3){
        return 'nożyce';
    }else{
        printMessage('Nie znam ruchu o id'+ argMoveId+ '_');
        return 'nieznany ruch';
    }
}
console.log('moves:', argComputerMove, argPlayerMove);