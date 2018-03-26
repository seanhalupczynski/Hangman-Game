// Initial variable definition
// Wordbank
var wordBank = ["pirate"];  
// Lived count  
var lived;
// Hanged count
var hanged;
// Number of guesses left
var numberOfGuesses;
// Variable for the dashes
var startGame = [];
// Random word selection
var mysteryWord = wordBank[Math.floor(Math.random() * wordBank.length)];

// Game start up
  

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
}


// Display number of guess
document.getElementById("guessCount").innerHTML = "Number of guesses left: " + numberOfGuesses;

// Display wins
document.getElementById("lived").innerHTML = "Times lived: " + live;

// Display losses
document.getElementById("hanged").innerHTML = "Times hanged: " + hang;
