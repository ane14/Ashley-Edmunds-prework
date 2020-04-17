// Global Variables
// ====================================================
// Creating an array of words
const college = ['gamecock', 'gator', 'tiger', 'crimsontide', 'aggie', 'bulldog', 'wildcat', 'commodore', 'rebel', 'razorback', 'volunteer'];
// Choose word randomly
let randNum = Math.floor(Math.random() * college.length);
let chosenWord = college[randNum];
let rightWord = [];
let wrongWord = [];
let underScore = [];

// Dom manipulation
let docUnderScore = document.getElementsByClassName('currentGuesses');
let docRightGuess = document.getElementsByClassName('correctGuesses');
let docWrongGuess = document.getElementsByClassName('alreadyGuessed');
// Main
// ====================================================
console.log(chosenWord)
// Create underscored based on length of word
let generateUnderscore = () => {
    for(let i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
        docUnderScore[0].innerHTML = underScore.join(' ');
    }
    return underScore;
}

// Get user's guess
document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keyCode);
// if users guess is right
    if (chosenWord.indexOf(keyword) > -1) {
    // add to right words array
    rightWord.push(keyword);
// replace underscore with right letter
    underScore[chosenWord.indexOf(keyword)] = keyword;
    docUnderScore[0].innerHTML = underScore.join(' ');
    docRightGuess[0].innerHTML = rightWord;

    if(underScore.join('') == chosenWord) {
        alert('You Win');
        console.log(underScore);
    }
}   
else {
    wrongWord.push(keyword);
    docWrongGuess[0].innerHTML = wrongWord;
    console.log(wrongWord);
    }
});


docUnderScore.innerHTML = generateUnderscore().join(' ');