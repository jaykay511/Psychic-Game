
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesMade = "";
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

var winText = document.getElementById("win-count");
var lossText = document.getElementById("loss-count");
var guessLeft = document.getElementById("guesses-left");
var guessMade = document.getElementById("guesses-made");


var gameOver = function() {
    guessesLeft = 9;
    guessesMade = "";
};

// put into function to run again
var stats = function() {
    winText.textContent = wins;
    lossText.textContent = losses;
    guessLeft.textContent = guessesLeft;
    guessMade.textContent = guessesMade;
};

document.onkeyup = function(event) {

    var userGuess = event.key.toLowerCase();

    if (alphabet.indexOf(userGuess) > -1) {

    
    if (userGuess === computerGuess) {
        wins++;
        gameOver();
        stats();
    }
    else {
        if (guessesLeft > 0) {
            guessesLeft--;
            guessesMade += userGuess;
            stats();
        }
        else {
            losses++;
            gameOver();
            stats();
        }

    }
    }
};

stats();
