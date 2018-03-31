// Declaring global variables
var wordBank = ["pirate", "treasure"];
var mysteryWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var mysteryWordArray = mysteryWord.split("");
var mysterWordCorrectGuessArray = [];
var mysteryWordUnderscores = [];
var alphabet = "abcdefghijklmnopqurstuvwxyz";
var validGuess = alphabet.split("");
var guess;
var guessIsValid = false;
var guessedLettersArray = [];
var guessIsCorrectArray = [];
var numberOfGuesses = 10;
var lived = 0;
var hanged = 0;

// Game start guess count
document.getElementById("guessCount").innerHTML = "Number of guesses left: " + numberOfGuesses;
// Game start times lived
document.getElementById("lived").innerHTML = "Times lived: " + lived;
// Game start times hanged
document.getElementById("hanged").innerHTML = "Times hanged: " + hanged;
// Display underscores for myster word
for (i=0; i<mysteryWord.length; i++) {
    mysteryWordUnderscores[i] = "_ ";
};
document.getElementById("wordLetters").innerHTML = mysteryWordUnderscores;


// Valid guess function
document.onkeypress = function Guess() {
    guess = event.key
    // validating the guess is a letter
    if (validGuess.includes(guess)) {
        guessIsValid = true;
    }
    else {
        alert("Please enter a letter.");
    };
    console.log(guess);

    // Document the guessed letter
    if (guessIsValid === true && guessedLettersArray.includes(guess)) {
        return false;
    }
    else{
        guessedLettersArray.push(guess);
        console.log(guessedLettersArray);
        document.getElementById("lettersGuessed").innerHTML = guessedLettersArray;
    };

    // Document if the guess is correct
    if (guessIsValid === true && mysteryWordArray.includes(guess)) {
        mysterWordCorrectGuessArray.push(guess);
        console.log(mysterWordCorrectGuessArray);
    };

    // Reduce guess count for wrong guesses
    if (guessIsValid === true && mysteryWordArray.includes(guess)) {
        for (i=0; i<mysteryWordArray.length; i++) {
            var correctGuessCheck = mysteryWordArray.indexOf(guess);
            if (correctGuessCheck === -1) {
            numberOfGuesses -= numberOfGuesses;
            document.getElementById("guessCount").innerHTML = "Number of guesses left: " + numberOfGuesses;
            }
            else {

            };
        };
    };
    // else {
    //     numberOfGuesses - 1;
    //     document.getElementById("guessCount").innerHTML = "Number of guesses left: " + numberOfGuesses;
    // }
};
 

