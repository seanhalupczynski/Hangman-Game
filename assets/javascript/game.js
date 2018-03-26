
// Loading the game in the window
window.onload = function gameLoad(event) {
var loadGame = event.onload;
var wordBank = ["pirate"];
var lived = 0;
var hanged = 0;
var numberOfGuesses = 10;
var mysteryWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var dashes;

    if (loadGame = true) {

        document.getElementById("wordLetters").forEach(mysteryWord.length).innerHTML = "_ "; 

        // Display number of guess
        document.getElementById("guessCount").innerHTML = "Number of guesses left: " + numberOfGuesses;

        // Display wins
        document.getElementById("lived").innerHTML = "Times lived: " + live;

        // Display losses
        document.getElementById("hanged").innerHTML = "Times hanged: " + hang;

    };
};
  

// User enters a letter
document.onkeyup = function userGuess(event) {
    // Setting the key event to variable letterGuess
    var letterGuess = event.key;
    var guessedLetters = [];

    console.log(letterGuess);

    if (typeof event !== "undefined") {

        letterGuess = event.keyCode;
    }

    // Add letters to guessedLetters array
    guessedLetters.push(String.fromCharCode(letterGuess));

    console.log(guessedLetters.length);

    // Display guessed letters
    document.getElementById("lettersGuessed").innerHTML = guessedLetters;    
};
