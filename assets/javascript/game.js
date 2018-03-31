// var firstGame = true;
var wordBank = ["pirate", "treasure"];
var lived;
var hanged;
var mysteryWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var mysteryWordArray = [];
// var mysteryWordIndex = mysteryWord.length;
var numberOfGuesses = mysteryWord.length;
var guessedLetters = [];
var alphabet = "abcdefghijklmnopqurstuvwxyz";
var validGuess = alphabet.split("");
var correctGuess = [];
// var firstGame = false;
// var hangedFinish = false;
// var livedFinish = false;
var livedPlayAgain;
var hangedPlayAgain;

//Set up start of game

window.addEventListener("load", function display () {

    lived = 0;
    hanged = 0;

    document.getElementById("guessCount").innerHTML = "Number of guesses left: " + numberOfGuesses;
    document.getElementById("lived").innerHTML = "Times lived: " + lived;
    document.getElementById("hanged").innerHTML = "Times hanged: " + hanged;

    for (i=0; i<mysteryWord.length; i++) {
        mysteryWordArray[i] = "_ ";
    };
    document.getElementById("wordLetters").innerHTML = mysteryWordArray;

});

// Add the guess to an array to show guesses
document.onkeypress = function lettersGuessed (event) {

    var letterGuess = event.key;
    var invalidGuessCheck = validGuess.indexOf(letterGuess);

    if (invalidGuessCheck != -1 && guessedLetters.includes(letterGuess)){
        
        return false;
    }
    else {

        guessedLetters.push(letterGuess);
        console.log(guessedLetters);
        document.getElementById("lettersGuessed").innerHTML = guessedLetters;
    };
};


// Correct Guess
window.addEventListener("keypress", function guessIsCorrect (event) {

    var letterGuess = event.key;
    var wordIndex = mysteryWord.indexOf(letterGuess);
    var mysteryWordArrayPositions = [];
    
    for (i=0; i<mysteryWord.length; i++) {
        if (mysteryWord[i]===letterGuess) {
        // if (wordIndex != -1) {
        // if (correctGuess.includes(letterGuess)) {
            // correctGuess.push(letterGuess);
            mysteryWordArrayPositions.push[i];
            mysteryWordArray[i] = letterGuess;
            document.getElementById("wordLetters").innerHTML = mysteryWordArray[i];
            console.log(mysteryWordArray);
            console.log(mysteryWordArrayPositions);

        };

            // if (i==mysteryWord[i]) {
            //     mysteryWordArray.push(letterGuess);
    };

    // };
    // document.getElementById("wordLetters").innerHTML = correctGuess
});//Need to fix the underscores being removed and fill the mystery word properly as the correct letter is guessed
 
// Reduce guess count
window.addEventListener("keypress", function reduceGuessCount (event) {

    var letterGuess = event.key;

    if (mysteryWord.includes(letterGuess)) {  //need to add a condtion to prevent clicking the same letter and reducing the count
        
        return false;
    }

    else {

        numberOfGuesses = numberOfGuesses - 1;
    };

    document.getElementById("guessCount").innerHTML = "Number of guesses left: " + numberOfGuesses;
});


// Player won, ask to keep playing
window.addEventListener("keypress", function lived (event) {

    var letterGuess = event.key;

    if (correctGuess.length == mysteryWord.length && numberOfGuesses > 0) {

    var livedPlayAgain = confirm("You lived!!! Want to play again?");
    }

    if (livedPlayAgain === true){
    lived = lived + 1;
    }
    else {
        return false;
    };
    document.getElementById("lived").innerHTML = "Times lived: " + lived;
});

// Reset game after win
window.addEventListener("click", function addLived() {
    
    if (lived.livedPlayAgain === true) {
        lived = lived + 1;
    }
    else {
        return false;
    };

    document.getElementById("guessCount").innerHTML = "Number of guesses left: " + numberOfGuesses;
    document.getElementById("lived").innerHTML = "Times lived: " + lived;
    document.getElementById("hanged").innerHTML = "Times hanged: " + hanged;

    for (i=0; i<mysteryWord.length; i++) {
        mysteryWordArray[i] = "_ ";
    };

    document.getElementById("wordLetters").innerHTML = mysteryWordArray;
}); //Currently the game does not reset

// Player lossed, ask to keep playing
window.addEventListener("keypress", function hanged (event) {

    if (correctGuess.length != mysteryWord.length && numberOfGuesses == 0) {
        
    var hangedPlayAgain = confirm("You have been hanged...Do you believe in reincarnation?");
    };
});

// Reset game after loss
window.addEventListener("click", function addHanged() {
    
    if (hanged.hangedPlayAgain === true) {
        hanged = hanged + 1;
    }
    else {
        return false;
    };

    document.getElementById("guessCount").innerHTML = "Number of guesses left: " + numberOfGuesses;
    document.getElementById("lived").innerHTML = "Times lived: " + lived;
    document.getElementById("hanged").innerHTML = "Times hanged: " + hanged;

    for (i=0; i<mysteryWord.length; i++) {
        mysteryWordArray[i] = "_ ";
    };

    document.getElementById("wordLetters").innerHTML = mysteryWordArray;
    document.getElementById("hanged").innerHTML = "Times hanged: " + hanged;
}); //Currently the game does not reset
