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

var userTotalScore = 0;
var goalGenerated = 0;
var oneCrystalValue = $('#oneCrystalValue').val();
var twoCrystalValue = $('#twoCrystalValue').val();
var threeCrystalValue = $('#threeCrystalValue').val();
var fourCrystalValue = $('#fourCrystalValue').val();
var crystalValue = [];
var wins = 0;
var loss = 0;


// Create a function that generates the goal # named generateGoal
function generateGoal() {
  goalGenerated = Math.floor(Math.random() * 100 + 1);
  console.log("goal generated: " + goalGenerated);
}

generateGoal();

// Run function on document load

// If the generateGoal function is run, assign each crystal a numeric value
function generateValue() {
    oneCrystalValue = Math.floor((Math.random() * 26) + 1);
    console.log("crystal1 value: " + oneCrystalValue);


    twoCrystalValue = Math.floor((Math.random() * 26) + 1);
    console.log("crystal2 value: " + twoCrystalValue);

    threeCrystalValue = Math.floor((Math.random() * 26) + 1);
    console.log("crystal3 value: " + threeCrystalValue);

    fourCrystalValue = Math.floor((Math.random() * 26) + 1);
    console.log("crystal4 value: " + fourCrystalValue);


}

// Calls the generate value fucntion & generates the values for each crystal
generateValue();

// Turn crystals into buttons
// when the button is clicked, pull the data from oneCrystalValue and add it to an array that adds the numbers together
$(".crystal1").click(function() {
    console.log(oneCrystalValue);
    var userTotalScore = new Array ();
    // Crystal value gets pushed to user total score
    crystalValue.push(oneCrystalValue);
    userTotalScore = crystalValue.reduce(function(a,b){  return a+b },0);
    console.log(userTotalScore);



  });
  $(".crystal2").click(function() {
    console.log(twoCrystalValue);
    crystalValue.push(twoCrystalValue);
    userTotalScore = crystalValue.reduce(function(a,b){  return a+b },0);
    console.log(userTotalScore);
  });
  $(".crystal3").click(function() {
    console.log(threeCrystalValue);
    crystalValue.push(oneCrystalValue);
    userTotalScore = crystalValue.reduce(function(a,b){  return a+b },0);
    console.log(userTotalScore);
  });
  $(".crystal4").click(function() {
    console.log(fourCrystalValue);
    crystalValue.push(oneCrystalValue);
    userTotalScore = crystalValue.reduce(function(a,b){  return a+b },0);
    console.log(userTotalScore);
  });
  

// when the user clicks on a crystal, the value of that crystal will get added to the user's total score
// If the user's total is equal to the generated goal, the user wins
// goal gets reset
// user total gets reset
// crystals are assigned new values
// wins++
// If the user's total score is greater than the generated goal, the user loses
// goal gets reset
// user total gets reset
// crystals are assigned new values
// loss++
// if the user's total score is less than the generated goal, the user continues playing
