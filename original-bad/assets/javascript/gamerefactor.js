// Declaring global variables
var wordBank = ["pirate", "treasure"];
var mysteryWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var mysteryWordArr = mysteryWord.split("");
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
var playAgain;

console.log(mysteryWord);
// Game start guess count
$("#guessCount").text("Number of guess left: " + numberOfGuesses)
// Game start times lived
$("#lived").text("Lived :" + lived);
// Game start times hanged
$("#hanged").text("Hanged: " + hanged);
// Display underscores for myster word
for (i=0; i<mysteryWord.length; i++) {
    $("#wordLetters").text(mysteryWord.length[i] = "_ ");
};
console.log(mysteryWordArr.length[i]);
// $("#wordLetters").text(mysteryWordUnderscores);

function resetGame() {
    var mysteryWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    var mysteryWordArr = mysteryWord.split("");
    var mysterWordCorrectGuessArray = [];
    var mysteryWordUnderscores = [];
    var guessedLettersArray = [];
    var guessIsCorrectArray = [];
    var numberOfGuesses = 10;     
    $("#guessCount").text("Number of guess left: " + numberOfGuesses)
    $("#lived").text("Lived :" + lived);
    $("#hanged").text("Hanged: " + hanged);
    for (i=0; i<mysteryWord.length; i++) {
        $("#wordLetters").text(mysteryWord.length[i] = "_ ");
    };
    $("lettersGuessed").text(guessedLettersArray);

};
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
        alert("You already guessed that letter.")
        return false;
    }
    else{
        guessedLettersArray.push(guess);
        console.log(guessedLettersArray);
        document.getElementById("lettersGuessed").innerHTML = guessedLettersArray;
    };

    // Document if the guess is correct
    if (guessIsValid === true && mysteryWordArr.includes(guess)) {
        mysterWordCorrectGuessArray.push(guess);
        console.log(mysterWordCorrectGuessArray);
        // Display correct guess
        for (i=0; i<mysteryWord.length; i++) {
            if (mysteryWord.length[i] == guess) {
                console.log(mysteryWordArr);
                mysteryWord.length[i] == guess;
                document.getElementById("wordLetters").innerHTML = mysteryWord.length[i].join(" ");
                console.log(mysteryWordUnderscores);
                console.log(mysteryWordArr);
            };
        };
    };

    // Reduce guess count for wrong guesses
    if (guessIsValid === true && mysteryWordArr.indexOf(guess) === -1) {
            numberOfGuesses--;
            document.getElementById("guessCount").innerHTML = "Number of guesses left: " + numberOfGuesses;
    };

    //Losing
    if (numberOfGuesses === 0) {
        hanged++
        document.getElementById("hanged").innerHTML = "Hanged: " + hanged;
        alert("You have been hanged.");
        playAgain = confirm("Do you believe in reincarnation? Play again.");
        if(playAgain === true) {
            resetGame(
                // mysteryWord, 
                // mysteryWordArr, 
                // mysterWordCorrectGuessArray, 
                // mysteryWordUnderscores, 
                // guessedLettersArray,
                // guessIsCorrectArray,
                // numberOfGuesses = 10   
            );
        }
        else {
            alert("Death comes for us all.");
        };
    };

    //Winning
    if (mysterWordCorrectGuessArray.indexOf(mysteryWordArr) !== -1 && numberOfGuesses > 0) {
        lived++
        document.getElementById("lived").innerHTML = "Lived: " + lived;
        alert("YOU HAVE BEEN SAVED!!!");
        playAgain = confirm("Did you get caught again pirating? Play again.");
        if (playAgain === true) {
            resetGame(
                // mysteryWord, 
                // mysteryWordArr, 
                // mysterWordCorrectGuessArray, 
                // mysteryWordUnderscores, 
                // guessedLettersArray,
                // guessIsCorrectArray,
                // numberOfGuesses = 10   
            );
        }
        else {
            alert("Better be living a clean life...or it will be back to the gallows for you.");
        };
    };


};
 

