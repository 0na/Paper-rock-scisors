'use strict';

var scisorsButton = document.getElementById("scisorsbutton");
var rockButton = document.getElementById("rockbutton");
var paperButton = document.getElementById("paperbutton");
var output = document.getElementById("output");
var score = document.getElementById("score");
var myScore = 0;
var compScore = 0;
var myScoreOutput = document.getElementById("myscore");
var CompScoreOutput = document.getElementById("myscore");
var newGame = document.getElementById("newgame");
var rounds = 5; //ile rund, dam jakakolwiek liczbe poki co
var winner = Math.floor(rounds / 2 + 1);
var numberOfRounds = document.getElementById("numberOfRound");
var resultOfGame = document.getElementById("resulfOfGame");
var mickey = document.getElementById("mickey");
var mickey = document.getElementById("mickey").style.visibility = "hidden";
var sadMickey = document.getElementById("sadmickey");
var sadMickey = document.getElementById("sadmickey").style.visibility = "hidden";
//var mickey = document.getElementById("mickey").style.visibility = "visible";

function hiddenMickey() {
    document.getElementById("mickey").style.visibility = "hidden";
}

function showMickey() {
    document.getElementById("mickey").style.visibility = "visible";
}


function hiddenSadMickey() {
    document.getElementById("sadmickey").style.visibility = "hidden";
}

function showSadMickey() {
    document.getElementById("sadmickey").style.visibility = "visible";
}

newGame.addEventListener("click", function () {
    rounds = window.prompt("How many round would you like to play ? ");
    if (isNaN(rounds)) {
        numberOfRounds.innerHTML = 'Please, write a number';
    } else if (rounds.length < 1) {
        numberOfRounds.innerHTML = 'Please, write something';
    } else {
        winner = Math.floor(rounds / 2 + 1);
        numberOfRounds.innerHTML = 'If you play ' + rounds + " , you have to win " + winner + " number of rounds";
    }
})


//funkcja - losowanie liczby
var randomNum = function () {
    return Math.floor(Math.random() * 3) + 1; //DZIAŁA 
}

/*
1 - nozyczki
2 - kamien
3 - papier
*/


scisorsButton.addEventListener("click", function () {
    var randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum == 1) { //jeśli wylosowane przez komputer 1 wtedy sa to nozyczki znak == to idealnie rowna sie
        output.innerHTML = "DRAW. Computer choose was Scisors, as yours"; //REMIS- nic nie zwraca
    } else if (randomNum == 2) { //jeśli wylosowane przez komputer 2 wtedy sa to kamień etc.
        output.innerHTML = "COMPUTER WON. Computer choose was Rock";
        compScore++; //komp dostaje punkt
        score.innerHTML = myScore + " - " + compScore; // 0 do 1 dla kompa

        if (compScore == winner) {
            resulfOfGame.innerHTML = "Game is finished. Computer WON";
            hiddenMickey();
            showSadMickey()
        }
    } else if (randomNum == 3) {
        output.innerHTML = "YOU WON. Computer choose was Paper. Congrats !";
        myScore++; //ja  dostaje punkt
        score.innerHTML = myScore + " - " + compScore; // 0 do 1 dla kompa
        if (myScore == winner) {
            resulfOfGame.innerHTML = "Game is finished. YOU WON- Congrats";
            showMickey();
            hiddenSadMickey();
        }
    }

});

rockButton.addEventListener("click", function () {
    var randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum == 1) { //jeśli wylosowane przez komputer 1 wtedy sa to nozyczki znak == to idealnie rowna sie
        output.innerHTML = "YOU WON. Computer choose was Scisors. Congrats !";
        myScore++; //ja  dostaje punkt
        score.innerHTML = myScore + " - " + compScore;
        if (myScore == winner) {
            showMickey();
            hiddenSadMickey();
            resulfOfGame.innerHTML = "Game is finished. YOU WON- Congrats";

        } // 0 do 1 dla kompa
    } else if (randomNum == 2) { //jeśli wylosowane przez komputer 2 wtedy sa to kamień etc.
        output.innerHTML = "DRAW. Computer choose was Rock, as yours";
    } else if (randomNum == 3) {
        output.innerHTML = "COMPUTER WON. Computer choose was Paper";
        compScore++; //komp dostaje punkt
        score.innerHTML = myScore + " - " + compScore;

        if (compScore == winner) {
            resulfOfGame.innerHTML = "Game is finished. Computer WON";
            hiddenMickey();
            showSadMickey();
        }
    }

});


paperButton.addEventListener("click", function () {
    var randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum == 1) { //jeśli wylosowane przez komputer 1 wtedy sa to nozyczki znak == to idealnie rowna sie
        output.innerHTML = "COMPUTER WON. Computer choose was Scisors";
        compScore++; //komp dostaje punkt
        score.innerHTML = myScore + " - " + compScore;

        if (compScore == winner) {
            resulfOfGame.innerHTML = "Game is finished. Computer WON";
            hiddenMickey();
            showSadMickey();
        }
    } else if (randomNum == 2) { //jeśli wylosowane przez komputer 2 wtedy sa to kamień etc.
        output.innerHTML = "YOU WON. Computer choose was Rock. Congrats !";
        myScore++; //ja  dostaje punkt
        score.innerHTML = myScore + " - " + compScore;

        if (myScore == winner) {
            resulfOfGame.innerHTML = "Game is finished. YOU WON- Congrats";
            showMickey();
            hiddenSadMickey();

        } // 0 do 1 dla kompa
    } else if (randomNum == 3) {
        output.innerHTML = "DRAW. Computer choose was Paper, as yours";
    }

});












/*


// funkcja, która przetłumaczy number na text
var numToText = function (randomNum) { //przetłumaczenie wylosowanych liczb na nazwe ruchu : kamien, papier, nozyce
    if (randomNum == 1) { //jeśli wylosowane przez komputer 1 wtedy sa to nozyczki znak == to idealnie rowna sie
        return "scisors";
    } else if (randomNum == 2) { //jeśli wylosowane przez komputer 2 wtedy sa to kamień etc.
        return "rock";
    } else if (randomNum == 3) {
        return "paper";
    }
}

var compareChoices = function (myChoice, computerChoice) {
    if (myChoice === computerChoice) {
        return "draw";
    } else if ((myChoice == 1) && (computerChoice == 3) ||
        (myChoice == 2) && (computerChoice == 1) ||
        (myChoice == 3) && (computerChoice == 3)) {
        myScore++;
    } else {
        compScore++;
    }


    //Mój ruch 
    var playerMove = function (myChoice) { //jako argument  nazwa ruchu gracza (myChoice),
        var computerChoice = randomNum(); //losuje liczbę z zakresu 1-3 i zapisuje ją w zmiennej 
        var compareResult = compareChoices(myChoice, computerChoice); //porownuje moj wybor w wyborem AI
        var myResult = numToText(myChoice); // konwertuje moj wybor do liczby
        var compResult = numToText(computerChoice); // konwertuje wybor komputera do liczby
        output.innerHTML = compareResult + "you choose" + myResult + "computer choose" + compResult;


        scisorsButton.addEventListener("click", function () {
            playerMove(1);
        });
        rockButton.addEventListener("click", function () {
            playerMove(2);
        });
        paperButton.addEventListener("click", function () {
            playerMove(3);
        })
    }
}


*/