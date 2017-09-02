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
$("#blue").click(function() {
  addValues(crystal.blue);
});

$("#purple").click(function() {
  addValues(crystal.purple);
});

$("#green").click(function() {
  addValues(crystal.green);
});

$("#multi").click(function() {
  addValues(crystal.multi);
});