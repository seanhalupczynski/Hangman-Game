// Declaring global variables
var wordBank = ["pirate", "treasure"];
var mysteryWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var mysteryWordArray = mysteryWord.split("");
var mysterWordCorrectGuessArray = [];
var mysteryWordUnderscores = [];
// var mysteryWordNoUnderscores = mysteryWordUnderscores.join(" ");
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
$("#guessCount").text("Number of guess left: " + numberOfGuesses)
// Game start times lived
$("#lived").text("Lived :" + lived);
// Game start times hanged
$("#hanged").text("Hanged: " + hanged);
// Display underscores for myster word
for (i=0; i<mysteryWord.length; i++) {
    mysteryWordUnderscores[i] = "_ ";
};
$("#wordLetters").text(mysteryWordUnderscores);


// Guess function
document.onkeypress = function Guess() {
    guess = event.key
    // validating the guess is a letter
    if (validGuess.includes(guess)) {
        guessIsValid = true;
    }
    else {
        alert("Please enter a letter.");
        return false;
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
        // Display correct guess
    };

    // Reduce guess count for wrong guesses
    if (guessIsValid === true && mysteryWordArray.indexOf(guess) == -1) {
            numberOfGuesses--;
            document.getElementById("guessCount").innerHTML = "Number of guesses left: " + numberOfGuesses;
    };

};
 

