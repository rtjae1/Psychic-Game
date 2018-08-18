//Defining the variables

var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //Defines the array of variables (letters) the computer can pick from
var wins = 1; //Defines the number of wins
var losses = 0; //Defines the number of losses
var guessesLeft = 9; //Defines the number of remaining guesses
var wrongLetter = []; //Defines an array for the incorrect letters guessed

document.getElementById('losses').textContent = losses;
document.getElementById('guessedLetters').textContent = wrongLetter;

//Computer randomly chooses letter
var computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log(computerLetter); //So I know what the letter is

//Allowing user to make keystrokes
document.onkeyup = function (event) {
    var userLetter = String.fromCharCode(event.keyCode); // Determines which key was pressed.

    // If userkey equals computerkey
    if (userLetter.toLowerCase() === computerLetter) {
        // Increase wins by 1
        document.getElementById('wins').textContent = wins;
        wins++;
        // Reset guess letters
        wrongLetter.entries = 0;
    };

    // If userkey does NOT equal computerkey
    if (userLetter.toLowerCase() !== computerLetter) {
        // Decrease guess attempts by 1
        document.getElementById('guessesLeft').textContent = guessesLeft;
        guessesLeft--;
    }

    //Resets guesses after 9
    if (guessesLeft === 0) {
        guessesLeft = 9;
        losses++;
        document.getElementById('losses').textContent = losses;
    }

    //Sends wrong guesses to the wrong guess list
    else {
        wrongLetter.push(userLetter.toLowerCase());
        document.getElementById('guessedLetters').textContent = wrongLetter;
    }

};