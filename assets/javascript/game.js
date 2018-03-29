// var firstGame = true;
var wordBank = ["pirate", "treasure"];
var lived = 0;
var hanged = 0;
var mysteryWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var mysteryWordLength = mysteryWord.length;
var numberOfGuesses = mysteryWord.length;
var wordUnderscore = "";
var mysteryWordArray = mysteryWord.split("");
var guessedLetters = [];
var alphabet = "abcdefghijklmnopqurstuvwxyz";
var validGuess = alphabet.split("");
var correctGuess = [];

//Set word to dashes
function setUnderscore(mysteryWordArray) {
    var mysteryWordArray = mysteryWord.split("");

    for (i=0; i<mysteryWordArray.length; i++) {

        var underscore = wordUnderscore + "_ ";
        document.getElementById("wordLetters").innerHTML = underscores; 
    }
};

// Is the guess valid?
function guessValid (event) {

    var letterGuess = event.key;
    var guessIsValid = false;

    if (validGuess.includes(letterGuess)) {
        guessIsValid = true;
    }
};

//Add the guess to an array to show guesses
function addGuess (event) {

    var letterGuess = event.key;

    while (numberOfGuesses > 0) {

        if (guessValid.guessIsValid = true) {

            guessedLetters.push(letterGuess);

        };
    };
};

// Display guessed letters
function displayGuess (event) {

    var letterGuess = event.key;

    if (guessedLetters.includes(letterGuess)) {

        return false;

    }

    else {

        document.getElementById("lettersGuessed").innerHTML = guessedLetters;
    }
};

// Handling a correct guess
function correctGuess (event) {

    var letterGuess = event.key;

    if (correctGuess.includes(letterGuess)) {

        // Display guess in mystery word
    };
};

// Reducing guess count for incorrect guesses
function guessCount (event) {

    var letterGuess = event.key;

    if (correctGuess.includes(letterGuess)) {
        
        return false;
    }

    else {

        numberOfGuesses = numberOfGuesses - 1;
    };

    document.getElementById("guessCount").innerHTML = "Number of guesses left: " + numberOfGuesses;
};

// Win or loss
function livedOrHanged (event) {
    
    var letterGuess = event.key;

    if (correctGuess.length == mysteryWordArray.length && numberOfGuesses > 0) {

        lived = lived + 1;
        document.getElementById("lived").innerHTML = "Times lived: " + lived;
        confirm("You lived!!! Want to play again?");
    }

    else {
        
        hanged = hanged + 1;
        document.getElementById("hanged").innerHTML = "Times hanged" + hanged;
        confirm("You have been hanged...Do you believe in reincarnation?")
    };
};


// Display number of guess
document.getElementById("guessCount").innerHTML = "Number of guesses left: " + numberOfGuesses;
    
// Display wins
document.getElementById("lived").innerHTML = "Times lived: " + lived;
    
// Display losses
document.getElementById("hanged").innerHTML = "Times hanged: " + hanged;
    
