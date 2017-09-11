// You'll want to get in the habit of placing your JS code within a document ready block,
// an iife (immediately invoked function expression), or some other functional context
// The reason for this is to not leak variables onto the global scope.
// In this case, your crystal object and all of your functions are readily
// available for a malicious user to tamper with.

// Crystal object
var crystal = {
  blue:
  {
    name: "Blue",
    value: 0
  },
  green:
  {
    name: "Green",
    value: 0
  },
  purple:
  {
    name: "Purple",
    value: 0
  },
  multi:
  {
    name: "Multi",
    value: 0
  }
};

// Scores 
var currentScore = 0;
var targetScore = 0;

// Wins and Losses
var winCount = 0;
var lossCount = 0;


// FUNCTIONS

// I really like how you broke up your game logic into functions
// it makes understanding the flow of your program much easier 👌

// select random numbers
var randNum = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Starts the Game (and reset the game)
var startGame = function() {

  // Reset the Current Score
  currentScore = 0;

  // Set a new Target Score (between 12 and 250)
  targetScore = randNum(12, 250);

  // Set different values for each of the crystals (between 1 and 17)
  crystal.blue.value = randNum(1, 17);
  crystal.purple.value = randNum(1, 17);
  crystal.green.value = randNum(1, 17);
  crystal.multi.value = randNum(1, 17);

  // Update the HTML to reflect all of these changes
  $("#your-score").html(currentScore);
  $("#target-score").html(targetScore);  
};

// Check if User Won or Lost and Reset the Game
var checkWin = function() {

  // Check if currentScore is larger than targetScore
  if (currentScore > targetScore) {
    alert("Sorry. You lost! Try again!");

    // Add to Loss Counter
    lossCount++;

    // Change Loss Count HTML
    $("#loss-count").html(lossCount);

    // Restart the game
    startGame();
  }

  else if (currentScore === targetScore) {
    alert("You Won! Play it again!");

    // Add to the Win Counter
    winCount++;

    // Change Win Count HTML
    $("#win-count").html(winCount);

    // Restart the game
    startGame();
  }

};

// Add values from clicked crystal
var addValues = function(clickedCrystal) {

  // Change currentScore
  currentScore += clickedCrystal.value;

  // Change the HTML to reflect changes in currentScore
  $("#your-score").html(currentScore);

  // Call the checkWin Function
  checkWin();

};

// Starts game
startGame();

// User Actions - Function Callers
// Instead of writing a click handler for each individual crystal
// you can write a more generic one which helps to DRY up your code.
$('.crystal').click(function() {
  var color = this.id
  addValues( crystal[color] )
})
