<html>
<head> 
<title>JS File</title>
    
</head>
<body>

<script type="text/javascript">
// Game Words
var words = ['Bugs Bunny', 'Tweety', 'Tasmanian Devil', 'Daffy Duck', 'Porky Pig', 'Marvin the Martian', 'Elmer Fudd', 'Pepe Le Pew', 'Sylvester', 'Speedy Gonzales', 'Foghorn Leghom', 'Yosemite Sam', 'Granny', 'Penelope Pussycat', 'Wile E. Coyote', 'Slowpoke Rodriguez', 'Barnyard Dawg', 'Witch Hazel', 'Hector the Bulldog', 'Road Runner', 'Sylvester Jr', 'Claude Cat', 'Henery Hawk', 'Little Red Riding Hood', 'Clyde Bunny', 'Hatta Mari']
var currentWord = words[Math.floor(Math.random() * words.length)].toUpperCase();

// Remaining Guesses
var guessesLeft = 6;
document.getElementById("guesses-left").innerHTML = guessesLeft;

// Number of Wins
var wins = 0;
document.getElementById("wins").innerHTML = wins;

var resetLettersGuessed = ""
// Array/Blanks
var newWord = [];

// User Guess correct/wrong
var mysteryWord = [];
var i;

console.log("Current word is: " + currentWord);

// Correct Letters Guessed
for (i = 0; i < currentWord.length; i++) {
    newWord.push("__");
}
document.getElementById("word-guess").innerHTML = newWord.join(" ");

// function for currentWord string position
function letterInWord(letter) {
    // letter position in the currentWord
    var positions = new Array();
    for (i = 0 ; i < currentWord.length; i++) {
        if (currentWord[i] === letter)
            positions.push(i);
    }
    return positions;
}

// return number of letters that is still not guessed
function lettersToGuess() {
    var i ;
    var toGess = 0 ;
    for (i in newWord) {
        if (newWord[i] === "__")
            toGess++;
    }
    return toGess;
}

// Guessed Letters
document.onkeyup = function (event) {
    var letter = event.key;
    var lettersGuessed = letter.toLocaleUpperCase();
    var i;
        var positions = letterInWord(lettersGuessed);


    // Compare user guess
    if (positions.length) {
        
        for (i = 0 ; i < positions.length; i++) {
            newWord[positions[i]] = lettersGuessed;
        }

        // Xchange underscore w/letter
        document.getElementById("word-guess").innerHTML = newWord.join(" ");
    } else {
        // alert("WRONG!");
        document.getElementById("letters-guessed").innerHTML += lettersGuessed + " ";

        // Subtract number of guesses left
        guessesLeft--;
        document.getElementById("guesses-left").innerHTML = guessesLeft;
    }

    // Reload the game once over
    if (guessesLeft === 0) {
        alert("Game Over! The word was " + currentWord);
        location.reload();
    }

    // Game Won/Reset
        if (lettersToGuess() == 0) {
        var phrases = ['You Win!', 'You Are A Winner!']
        var nextGame = phrases[Math.floor(Math.random() * phrases.length)];
        alert(nextGame);


        // Reset Guess/Letters
        guessesLeft = 6;
        document.getElementById("guesses-left").innerHTML = guessesLeft;
        document.getElementById("letters-guessed").innerHTML = resetLettersGuessed;
       
        // New Word
        currentWord = words[Math.floor(Math.random() * words.length)].toUpperCase();

        newWord = [];
        for (i = 0; i < currentWord.length; i++) {
            newWord.push("__");
        }
        document.getElementById("word-guess").innerHTML = newWord.join(" ");

        // Total Wins
        wins++;
        document.getElementById("wins").innerHTML = wins;
    }
}
</script>
</body>
</html>
