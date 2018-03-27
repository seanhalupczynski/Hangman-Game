
// Loading the game in the window
window.onload = function gameLoad(event) {
var loadGame = event.onload;
var firstGame = true;
var wordBank = ["pirate", "treasure"];
var lived = 0;
var hanged = 0;
var numberOfGuesses = 10;
var mysteryWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var dashes = mysteryWord;

    if (firstGame = true) {

        document.getElementById("wordLetters").innerHTML = dashes; 

        // Display number of guess
        document.getElementById("guessCount").innerHTML = "Number of guesses left: " + numberOfGuesses;

        // Display wins
        document.getElementById("lived").innerHTML = "Times lived: " + lived;

        // Display losses
        document.getElementById("hanged").innerHTML = "Times hanged: " + hanged;

    };
};
  

window.addEventListener("keypress", function(event) {

    var guessedLetters = [];
    var letterGuess = event.key;

        if (guessedLetters.includes(letterGuess)) {
            return false;
        }
        else if (letterGuess === "a"||"b"||"c"||"d"||"e"||"f"||"g"||"h"||"i"||"j"||"k"||"l"||"m"||"n"||"o"||"p"||"q"||"r"||"s"||"t"||"u"||"v"||"w"||"x"||"y"||"z") {
           
            // Add letters to guessedLetters array
            guessedLetters.push(letterGuess)
            
        }
        else {
            return false;
        }
        
    // Display guessed letters
    document.getElementById("lettersGuessed").innerHTML = guessedLetters; 

    console.log(letterGuess);
    console.log(guessedLetters.length);
}, false);  