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

if(computerMove == 'kamień' && playerMove =='papier'){printMessage('Ty wygrywasz');}
if(computerMove == 'papier' && playerMove == 'nożyce'){printMessage('Ty wygrywasz');}
if(computerMove == 'nożyce' && playerMove == 'kamień'){printMessage('Ty wygrywasz');}
if(computerMove == 'kamień' && playerMove == 'nożyce'){printMessage('Przegrywasz');}
if(computerMove == 'papier' && playerMove == 'kamień'){printMessage('Przegrywasz');}
if(computerMove == 'nożyce' && playerMove == 'papier'){printMessage('Przegrywasz');}
if(computerMove == 'kamień' && playerMove == 'kamień'){printMessage('Remis');}
if(computerMove == 'papier' && playerMove == 'papier'){printMessage('Remis');}
if(computerMove == 'nożyce' && playerMove == 'nożyce'){printMessage('Remis');}
if(computerMove == 'kamień' && playerMove == 'nieznany ruch'){printMessage('Proszę wybrać 1 2 lub 3');}
if(computerMove == 'papier' && playerMove == 'nieznany ruch'){printMessage('Proszę wybrać 1 2 lub 3');}
if(computerMove == 'nożyce' && playerMove == 'nieznany ruch'){printMessage('Proszę wybrać 1 2 lub 3');}

let computerMove = getMoveName(randomNumber);

function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    }else{
        printMessage('Nie znam ruchu o id' + argMoveId + '_');
        return 'nieznany ruch';
    }

    }

function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem'+ argComputerMove+ 'a ty'+ argPlayerMove);

    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz');
    }else {
        printMessage('Przegrywasz');
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

function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem'+ argComputerMove+ 'a ty'+ argPlayerMove);

    if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz');
    }else{
        printMessage('Przegrywasz');
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

function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem'+ argComputerMove+ 'a ty'+ argPlayerMove);

    if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz');
    }else{
        printMessage('Przegrywasz');
    }
}

function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem'+ argComputerMove+ 'a ty'+ argPlayerMove);

    if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('Remis');

    }
}

function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem'+ argComputerMove+ 'a ty'+ argPlayerMove);

    if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
        printMessage('Remis');
    }
}

function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem'+ argComputerMove+ 'a ty'+ argPlayerMove);

    if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        printMessage('Remis');
    }
}

function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem'+ argComputerMove+ 'a ty'+ argPlayerMove);

    if(argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
        printMessage('Proszę wybrać 1 2 lub 3');
    }
}

function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem'+ argComputerMove+ 'a ty'+ argPlayerMove);

    if(argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
        printMessage('Proszę wybrać 1 2 lub 3');
    }
}

function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem'+ argComputerMove+'a ty'+ argPlayerMove);

    if(argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
        printMessage('Proszę wybrać 1 2 lub 3');
    }
}

console.log('moves:', argComputerMove, argPlayerMove);