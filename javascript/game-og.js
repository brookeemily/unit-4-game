// There will be four crystals displayed as buttons on the page.
// The player will be shown a random number at the start of the game.

// When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

// Your game will hide this amount until the player clicks a crystal.
// When they do click one, update the player's score counter.

// The player wins if their total score matches the random number from the beginning of the game.
// The player loses if their score goes above the random number.

// The game restarts whenever the player wins or loses.

// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

// Option 1 Game design notes

// The random number shown at the start of the game should be between 19 - 120.
// Each crystal should have a random hidden value between 1 - 12.

// variables
var totalScoreValue = [];
var goalGeneratedValue = [];
var oneCrystalValue = $("#oneCrystalValue").val();
var twoCrystalValue = $("#twoCrystalValue").val();
var threeCrystalValue = $("#threeCrystalValue").val();
var fourCrystalValue = $("#fourCrystalValue").val();
var crystalValue = [];
var wins = 0;
var loss = 0;
var userTotalScore = 1;

// Create a function that generates the goal number named generateGoal
function generateGoal() {
  var goalGenerated = Math.floor(Math.random() * 10 + 1);
  console.log("goal generated: " + goalGenerated);
  goalGeneratedValue.push(goalGenerated);

  $("#goal").empty();
  $("#goal").append("<h1>YOUR GOAL: " + goalGeneratedValue + "</h1>");
}

generateGoal();

// Run function on document load

// If the generateGoal function is run, assign each crystal a numeric value
function generateValue() {
  oneCrystalValue = Math.floor(Math.random() * 1 + 1);
  console.log("crystal1 value: " + oneCrystalValue);

  twoCrystalValue = Math.floor(Math.random() * 1 + 1);
  console.log("crystal2 value: " + twoCrystalValue);

  threeCrystalValue = Math.floor(Math.random() * 1 + 1);
  console.log("crystal3 value: " + threeCrystalValue);

  fourCrystalValue = Math.floor(Math.random() * 1 + 1);
  console.log("crystal4 value: " + fourCrystalValue);
}

// Calls the generate value fucntion & generates the values for each crystal
generateValue();

// Turn crystals into buttons
function reset() {
  // $.removeData(userTotalScore);
  userTotalScore=0;
}

// function checkWin() {
//   if (userTotalScore == goalGeneratedValue) {
//     // wins increase
//     wins++;
//     generateGoal();
//     generateValue();
//     console.log("winner");
//     console.log("wins" + wins);
//     reset();
//     // goal is reset
//   }
// }

// function checkLoss() {
//   if (userTotalScore > goalGeneratedValue) {
//     loss++;
//     generateGoal();
//     generateValue();
//     console.log("loser!");
//     console.log(loss);
//     reset();
//   }
// }

function addScore() {
  

  if (userTotalScore < goalGeneratedValue) {
    userTotalScore = crystalValue.reduce(function(a, b) {
      return a + b;
    }, 1);
    checkWin();
    checkLoss();
  }
}

function checkWin() {
  if (userTotalScore == goalGeneratedValue) {
    // wins increase
    wins++;
    generateGoal();
    generateValue();
    console.log("winner");
    console.log("wins" + wins);
    reset();
    addScore();
  }
}

function checkLoss() {
    if (userTotalScore > goalGeneratedValue) {
      loss++;
      generateGoal();
      generateValue();
      console.log("loser!");
      console.log(loss);
      reset();
      addScore();
    }

}

// when the button is clicked, pull the data from oneCrystalValue and add it to an array that adds the numbers together

// CRYSTAL 1!
$(".crystal1").click(function() {
  // console.log(oneCrystalValue);
  // Crystal value gets pushed to user total score
  addScore();

  crystalValue.push(oneCrystalValue);
  console.log(goalGeneratedValue[0]);
  console.log("yo" + userTotalScore);
  checkWin();
  checkLoss();
  addScore();
});

//CRYSTAL 2!
$(".crystal2").click(function() {
  // console.log(twoCrystalValue);
  crystalValue.push(twoCrystalValue);
  // userTotalScore = crystalValue.reduce(function(a, b) {
  //   return a + b;
  // }, 0);
  addScore();

  console.log("yo" + userTotalScore);
  // checkWin();
  // checkLoss();
});

//CRYSTAL 3!
$(".crystal3").click(function() {
  // console.log(threeCrystalValue);
  crystalValue.push(threeCrystalValue);
  // userTotalScore = crystalValue.reduce(function(a, b) {
  //   return a + b;
  // }, 0);
  addScore();

  console.log("yo" + userTotalScore);
  // checkWin();
  // checkLoss();
});

//CRYSTAL 4!
$(".crystal4").click(function() {
  // console.log(fourCrystalValue);
  crystalValue.push(fourCrystalValue);
  // userTotalScore = crystalValue.reduce(function(a, b) {
  //   return a + b;
  // }, 0);
  addScore();

  totalScoreValue.push(userTotalScore);
  // checkWin();
  // checkLoss();
});

addScore();


// function checkWin() {
//   if (userTotalScore == goalGeneratedValue) {
//     // wins increase
//     wins++;
//     userTotalScore = 0;
//     generateGoal();
//     generateValue();
//     console.log("winner");
//     console.log("wins" + wins);
//     console.log("ah yes" + userTotalScore);
//     reset();
//     // goal is reset
//   }
// }

// function checkLoss() {
//   if (userTotalScore > goalGeneratedValue) {
//     loss++;
//     userTotalScore = 0;
//     generateGoal();
//     generateValue();
//     console.log("loser!");
//     console.log(loss);
//     reset();

//   }
// }

// addScore();
// console.log("hello help me pls");
// checkWin();
// checkLoss();
// console.log(totalScoreValue);

// If the user's total is equal to the generated goal, the user wins
// if ($("#frm01").is(":visible"))

// user total gets reset
// crystals are assigned new values
// wins++
// If the user's total score is greater than the generated goal, the user loses
// goal gets reset
// user total gets reset
// crystals are assigned new values
// loss++
// if the user's total score is less than the generated goal, the user continues playing
