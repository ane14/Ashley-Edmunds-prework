const college = ['badger', 'gator', 'tiger', 'hokie', 'deacon', 'wildcat', 'husky', 'lion', 'cougar', 'bruin'];

// Choose word randomly
let randNum = Math.floor(Math.random() * college.length);
let chosenWord = college[randNum];

// HTML Classnames
let rightWord      = [];
let wrongWord      = [];
let underScore     = [];
let remainingGuess = 10;
let wins           = 0;

// Dom manipulation
let docremainingGuess = document.getElementsByClassName('remainingGuess');
let docUnderScore     = document.getElementsByClassName('currentGuesses');
let docRightGuess     = document.getElementsByClassName('correctGuesses');
let docWrongGuess     = document.getElementsByClassName('alreadyGuessed');
let docWin            = document.getElementsByClassName('win');

// Create underscores based on length of word
function generateUnderscore() {
    for (let i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
        docUnderScore[0].innerHTML = underScore.join(' ');
    }
    return underScore;
}

// Get user's guess
document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keyCode);

    // If user's guess is right
    if (chosenWord.indexOf(keyword) > -1) {

        // Add to right words array
        rightWord.push(keyword);

        // Replace underscore with right letter
        underScore[chosenWord.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore.join(' ');
        docRightGuess[0].innerHTML = rightWord;

        if (underScore.join('') == chosenWord) {
            alert('You Win');

            wins += 1;
            docWin[0].innerHTML = wins;

            resetGame();
        }
    }
    else {
        wrongWord.push(keyword);
        docWrongGuess[0].innerHTML = wrongWord;

        remainingGuess -= 1;
        docremainingGuess[0].innerHTML = remainingGuess;

        // Check to see if there are no more guesses
        if (remainingGuess <= 0) {
            alert('You Lost');

            resetGame();
        }
    }
});

// Display underscores at the beginning of the game
generateUnderscore().join(' ');

function resetGame() {
    // Reset game information
    rightWord = [];
    docRightGuess[0].innerHTML = rightWord;

    wrongWord = [];
    docWrongGuess[0].innerHTML = wrongWord;

    underScore = [];
    docUnderScore[0].innerHTML = underScore;

    // Choose new word
    randNum = Math.floor(Math.random() * college.length);
    chosenWord = college[randNum];

    // Reset underscores
    generateUnderscore();

    // Reset number of guesses
    remainingGuess = 10;
    docremainingGuess[0].innerHTML = remainingGuess;
}