var firstGame = true;
var wordBank = ["pirate", "treasure"];
var lived = 0;
var hanged = 0;
var mysteryWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var numberOfGuesses = mysteryWord.length;
var dashes = mysteryWord;
var guessedLetters = [];


// Loading the first game in the window
window.onload = function gameLoad(event) {
var loadGame = event.onload;

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

    var letterGuess = event.key;

        for (i=numberOfGuesses; i>0; i--) { //Added for loop and printing stopped
            if (guessedLetters.includes(letterGuess)) {
                return false;
            }
            // //Attempt to only include sting
            // else if (letterGuess !== "a"||"b"||"c"||"d"||"e"||"f"||"g"||"h"||"i"||"j"||"k"||"l"||"m"||"n"||"o"||"p"||"q"||"r"||"s"||"t"||"u"||"v"||"w"||"x"||"y"||"z") {
           
            // }
            else if (letterGuess === "a"||"b"||"c"||"d"||"e"||"f"||"g"||"h"||"i"||"j"||"k"||"l"||"m"||"n"||"o"||"p"||"q"||"r"||"s"||"t"||"u"||"v"||"w"||"x"||"y"||"z") {
           
            // Add letters to guessedLetters array
            guessedLetters.push(letterGuess)
            }
            // Display guessed letters
            document.getElementById("lettersGuessed").innerHTML = guessedLetters; 
            
            //Reduce guess count
            if (guessedLetters.includes(letterGuess) = false) {
                numberOfGuesses - 1;
            };

            console.log(letterGuess);
            console.log(guessedLetters.length);

        } 
    }, false
); 


