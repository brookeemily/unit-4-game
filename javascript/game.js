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
var goalGeneratedValue = $("#goalGeneratedValue").val();
var oneCrystalValue = $("#oneCrystalValue").val();
var twoCrystalValue = $("#twoCrystalValue").val();
var threeCrystalValue = $("#threeCrystalValue").val();
var fourCrystalValue = $("#fourCrystalValue").val();
var wins = 0;
var loss = 0;
var userTotalScore = [];
var score = 0;

// Create a function that generates the goal number named generateGoal
function generateGoal() {
  goalGeneratedValue = Math.floor(Math.random() * 10 + 1);
  console.log("goal value: " + goalGeneratedValue);
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

function reset() {
$("#goal").empty();
generateGoal();
generateValue();
totalScoreValue.length = 0;
console.log("everything has been refreshed");
}

function addScore() {
  

  // if (totalScoreValue < goalGeneratedValue) {
    userTotalScore = totalScoreValue.reduce((a, b) => a + b, 0);
    console.log("this is it " + userTotalScore);
    checkWin();
    checkLoss();
  }


// when the button is clicked, pull the data from oneCrystalValue and add it to an array that adds the numbers together

// CRYSTAL 1!
$(".crystal1").click(function() {
    totalScoreValue.push(oneCrystalValue);
    addScore();
    checkWin();
    checkLoss();
  });
  
  //CRYSTAL 2!
  $(".crystal2").click(function() {
    totalScoreValue.push(twoCrystalValue);
    addScore();
    checkWin();
    checkLoss();
  });
  
  //CRYSTAL 3!
  $(".crystal3").click(function() {
    totalScoreValue.push(threeCrystalValue);
    addScore();
    checkWin();
    checkLoss();
  });
  
  //CRYSTAL 4!
  $(".crystal4").click(function() {
    totalScoreValue.push(fourCrystalValue);
    addScore();
    checkWin();
    checkLoss();
  });

  addScore();
  
function checkWin() {
  if (userTotalScore == goalGeneratedValue) {
    // wins increase
    wins++;
    console.log("winner");
    console.log("wins" + wins);
    reset();
  }
}

function checkLoss() {
  if (userTotalScore > goalGeneratedValue) {
    loss++;
    console.log("loser!");
    console.log(loss);
    reset();
  }
}


// function checkWin() {
//   if (totalScoreValue == goalGeneratedValue) {
//     // wins increase
//     wins++;
//     generateGoal();
//     generateValue();
//     console.log("winner");
//     console.log("wins" + wins);
//     reset();
//   }
// }

// function checkLoss() {
//     if (totalScoreValue > goalGeneratedValue) {
//       loss++;
//       generateGoal();
//       generateValue();
//       console.log("loser!");
//       console.log(loss);
//       reset();
//     }

// }





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
