$(document).ready(function(){

    var wordArray = ["pirate", "treasure", "cannons"];
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

    console.log(word);

    // Initial display function
    function display(){
        console.log("displaying the game")
        for (i=0; i<word.length; i++){
            blankedWord.push("_ ");
        };
        document.getElementById("available-letters").innerHTML = `Available letters: ${letters.join(" ")}`;
        document.getElementById("wins").innerHTML = `Wins: ${wins}`;
        document.getElementById("losses").innerHTML = `Losses: ${losses}`;
        document.getElementById("remaining-guesses").innerHTML = `Remaining Guesses: ${guesses}`;
        document.getElementById("guessed-letters").innerHTML = "Letters guessed: ";
        document.getElementById("mystery-word").innerHTML = `Mystery word: ${blankedWord.join(" ")}`;
        document.getElementById("start-button").disabled = true;
    };

    // Resetting game variables
    function resetGameVariables(){
        console.log("variables being reset")
        wordArray = ["pirate", "treasure"];
        word = wordArray[Math.floor(Math.random()*wordArray.length)];
        mysteryWord = word.split("");
        blankedWord = [];
        guesses = 6;
        remainingGuesses = guesses;
        alphabet = "abcdefghijklmnopqrstuvwxyz";
        letters = alphabet.split("");
        guessedLetters = [];
    };


    // Indicate that the game has started
    function gameIsStarted(){
        if (gameStarted === false){
            gameStarted = true;
            display();
        };
    };

    function endGame(guess){
        if(blankedWord.indexOf("_ ") === -1 && remainingGuesses > 0){
            updateDisplay(guess);
            setTimeout = 100;
            wins++;
            alert("YOU WON!");
            if(confirm("Play again?")){
                console.log("new game requested")
                resetGameVariables();
                display();
            };
        };
        if(blankedWord.indexOf("_ " != -1) && remainingGuesses === 0){
            updateDisplay(guess);
            setTimeout = 100;
            losses++;
            alert("You lost :(");
            if(confirm("Play again?")){
                console.log("new game requested")
                resetGameVariables();
                display();
            };
        };
    };

    function incrementWins(){
        wins++;
    };

    function incrementLosses(){
        losses++;
    };
    // Function to update the display
    function updateDisplay(guess){
        document.getElementById("available-letters").innerHTML = `Available letters: ${letters.join(" ")}`;
        // document.getElementById("wins").innerHTML = `Wins: ${wins}`;
        // document.getElementById("losses").innerHTML = `Losses: ${losses}`;
        document.getElementById("remaining-guesses").innerHTML = `Remaining Guesses: ${remainingGuesses}`;
        document.getElementById("guessed-letters").innerHTML = `Letters guessed: ${guessedLetters.join(" ")}`;
        document.getElementById("mystery-word").innerHTML = `Mystery word: ${blankedWord.join(" ")}`;
        document.getElementById("start-button").disabled = true;
    };

    // Function to handle the user's guess
    function userGuess(guess){
        // Check for previously guessed letter
        if(guessedLetters.includes(guess)){
            alert("You already guessed that letter.");
        }
        else{

            if(mysteryWord.includes(guess)){
                positions = [];
                for(i=0; i<mysteryWord.length; i++){
                    if(mysteryWord[i] === guess){
                        positions.push(i);
                    };
                };
                for(i=0; i<positions.length; i++){
                    blankedWord[positions[i]] = guess;
                };
                letters.splice(letters.indexOf(guess), 1);
                guessedLetters.push(guess);
            }    
            // Check that the guess is a letter
            else if(letters.indexOf(guess) === -1){
                console.log(letters.indexOf(guess));
                alert("That is not a valid guess!");
            }
            // Reduce the remaining guess count
            else{
                remainingGuesses--;
                guessedLetters.push(guess)
                letters.splice(letters.indexOf(guess), 1);
            };
            endGame(guess);
        };
        updateDisplay(guess);
    };
        
    // Click the start button to begin the game
    document.getElementById("start-button").onclick = function(){
        gameIsStarted();
        // Taking the user's guess
        window.addEventListener("keyup", function(event){
            guess = event.key;
            userGuess(guess);
        });
    
    };
    
});