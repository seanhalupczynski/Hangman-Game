$(document).ready(function(){

    var wordArray = ["pirate", "treasure"];
    var word = wordArray[Math.floor(Math.random()*wordArray.length)];
    var mysteryWord = word.split("");
    var blankedWord = [];
    var guesses = 6;
    var remainingGuesses = guesses;
    var wins = 0;
    var losses = 0;
    var gameStarted = false;
    var gameFinished = false;
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var letters = alphabet.split("");
    var guessedLetters = [];

    console.log(letters);
    console.log(word);

    // Initial display function
    function display(){
        document.getElementById("available-letters").innerHTML = `Available letters: ${letters.join(" ")}`;
        document.getElementById("wins").innerHTML = `Wins: ${wins}`;
        document.getElementById("losses").innerHTML = `Losses: ${losses}`;
        document.getElementById("remaining-guesses").innerHTML = `Remaining Guesses: ${guesses}`;
        document.getElementById("guessed-letters").innerHTML = "Letters guessed: ";
        document.getElementById("mystery-word").innerHTML = `Mystery word: ${blankedWord.join(" ")}`;
        document.getElementById("start-button").disabled = true;
    };

    // Indicate that the game has started
    function gameIsStarted(){
        if (gameStarted === false){
            gameStarted = true;
            display();
        }
    };

    // Click the start button to begin the game
    document.getElementById("start-button").onclick = function(){
        for (i=0; i<word.length; i++){
            blankedWord.push("_ ");
        };
        gameIsStarted();
    };

    // Check that the guess is valid
    function validGuessCheck(guess){
        if (letters.indexOf(guess) === -1){
            console.log(letters.indexOf(guess));
            alert("That is not a valid guess!");
        };
    };

    // Function to handle winning
    function gameWon(){
        if(blankedWord.indexOf("_ " === -1)){
            setTimeout = 100;
            alert("You won!");
            wins++;
        }
    };

    // Function to handle losing
    function gameLost(){
        if(blankedWord.indexOf != -1 && remainingGuesses === 0){
            setTimeout = 100;
            alert("You lost :(");
            losses++
        };
    };

    // Function to update the display
    function updateDisplay(guess){
        document.getElementById("available-letters").innerHTML = `Available letters: ${letters.join(" ")}`;
        document.getElementById("wins").innerHTML = `Wins: ${wins}`;
        document.getElementById("losses").innerHTML = `Losses: ${losses}`;
        document.getElementById("remaining-guesses").innerHTML = `Remaining Guesses: ${remainingGuesses}`;
        document.getElementById("guessed-letters").innerHTML = `Letters guessed: ${guessedLetters.join(" ")}`;
        document.getElementById("mystery-word").innerHTML = `Mystery word: ${blankedWord.join(" ")}`;
        document.getElementById("start-button").disabled = true;
    };

    // Function to handle the user's guess
    function userGuess(guess){
        // validGuessCheck(guess);
        if(mysteryWord.includes(guess)){
            positions = [];
            for(i=0; i<mysteryWord.length; i++){
                if(mysteryWord[i] === guess){
                    positions.push[i];
                };
            };
            for(i=0; i<positions.length; i++){
                blankedWord[positions[i]] = guess;
            };
        }
        else{
            if(guessedLetters.includes(guess)){
                alert("You already guessed that letter.");
            }
            else if(letters.indexOf(guess) === -1){
                console.log(letters.indexOf(guess));
                alert("That is not a valid guess!");
            }
            else{
                remainingGuesses--;
                guessedLetters.push(guess)
            };
        };
        updateDisplay(guess);
    };

    // Taking the user's guess
    window.addEventListener("keypress", function(event){
        guess = event.key;
        userGuess(guess);
        // gameWon();
        // gameLost();
    });
});