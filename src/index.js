// Declare player totals - based on number of players entered by user



function createPlayer() {
  // Create a function that will make a player(num)Total = 0 and create a new player(num) array ready for their turn.
}

let player1RunningTotal = 0; // Starting with 1 player every game - their running total for each of their turns.
let player1GrandTotal = 0; // Their total points at the start of the game.

let numberOfPlayers = 1; //Give the user a html input to change this variable.
let dice = [];

function choosingNumberOfPlayers(numberOfPlayers) {
  
}
  // Function to decide how many playertotals to start with.
  


// Make an array for each player when it becomes their turn

function turns(numberOfPlayers) {
  // Function that dictates what happens on a player's turn.
}

// Defining the unicode that I will use to 'type' into HTML for the correct dice to pop up
let unicode = "";

// Program 2 random numbers that display on 2 dice
// and also to select the correct unicode to paste into HTML.
function diceRoll() {
  const diceUnicodes = [
    "&#9856;",
    "&#9857;",
    "&#9858;",
    "&#9859;",
    "&#9860;",
    "&#9861;",
  ];

  let dieOne = Math.floor(Math.random() * 6) + 1;
  let unicode1 = diceUnicodes[dieOne - 1];
  $("div#die1").html(unicode1);

  let dieTwo = Math.floor(Math.random() * 6) + 1;
  let unicode2 = diceUnicodes[dieTwo - 1];
  $("div#die2").html(unicode2);

  return [dieOne, dieTwo];
}

dice = diceRoll(); // This takes our diceRoll function and adds it to the dice array

// Add the random numbers together into the array (if not doubles or 1)

let rollTotal = 0;

let turnOutcome = ""; // Declaring a variable to assign later for when we have doubles.

function diceAddition() {
  const outcomes = [
    "Fat Pig",
    "Pork Chops",
    "Dizzy Pig",
    "Bacon Reroll",
    "My Pig",
    "Killer Pig",
  ];
  let [dieOne, dieTwo] = dice;
  if (dieOne === dieTwo) {
    turnOutcome = outcomes[dieOne - 1];
    switch (turnOutcome) {
      case "Fat Pig":
        player1RunningTotal = 0;
        rollOnlyDieOne();
        console.log("Fat Pig Roll = " + rollOnlyDieOne());
        if (rollOnlyDieOne === 6) {
          bankAndAddToGrandTotal();
          return turnOutcome;
        } else {
          player1GrandTotal = 0;
          bankAndAddToGrandTotal;
          return turnOutcome;
        }
      case "Pork Chops":
        player1RunningTotal /= 2;
        bankAndAddToGrandTotal;
        return turnOutcome;
      case "Dizzy Pig":
        player1RunningTotal = 0;
        bankAndAddToGrandTotal;
        // Some code needed here to make the player order reverse
        return turnOutcome;
      case "Bacon Reroll":
        player1RunningTotal = 0;
        return turnOutcome;
      case "My Pig":
        player1GrandTotal += player1RunningTotal;
        // Code here to assign the current grand total to another player's grand total. Ensure that the win condition cannot be met through the banking of the previous line.
        return turnOutcome;
      case "Killer Pig":
        player1RunningTotal = 0;
        rollOnlyDieOne(); // Add code to project this onto someone else's total.
        bankAndAddToGrandTotal;
        return turnOutcome;
    }
  } else if (dieOne !== 1 && dieTwo !== 1) {
    rollTotal = dieOne += dieTwo;
    return rollTotal;
  } else if (dieOne === 1 && dieTwo !== 1) {
    rollTotal = dieTwo;
    return rollTotal;
  } else if (dieOne !== 1 && dieTwo === 1) {
    rollTotal = dieOne;
    return rollTotal;
  }
}

diceAddition(); // Calling the function - dice addition

// Here we are adding the first roll to the running total, unless it is a double, in which case we take that double event and
// say what to do with it below.

if (isNaN(diceAddition())) {
  $("div.doublesAnnouncement").html(diceAddition());
} else {
  player1RunningTotal += diceAddition();
  $("div.doublesAnnouncement").html(diceAddition());
  $("p#player1RunningTotal").html("Player 1 Running Total = " + player1RunningTotal);
}

// Function to allow only dieOne to roll (for things like Fat Pig, Killer Pig, etc.)
setTimeout(function rollOnlyDieOne() {
  dieOne = Math.floor(Math.random() * 6) + 1;
  return dieOne;
}, 1000);

// Function to allow only dieTwo to roll (when dieOne has a 1)
function rollOnlyDieTwo() {
  dieTwo = Math.floor(Math.random() * 6) + 1;
  return dieTwo;
}

function doublesEvents() {
  switch (diceAddition()) {
    case "Fat Pig":
      player1RunningTotal = 0;
      let fatPigRoll = rollOnlyDieOne();
      if (fatPigRoll === 6) {
        bankAndAddToGrandTotal();
      } else {
        player1GrandTotal = 0;
        bankAndAddToGrandTotal;
        break;
      }
    case "Pork Chops":
      math.round((player1RunningTotal /= 2));
      bankAndAddToGrandTotal;
      break;
    case "Dizzy Pig":
      player1RunningTotal = 0;
      bankAndAddToGrandTotal;
      // Some code needed here to make the player order reverse
      break;
    case "Bacon Reroll":
      player1RunningTotal = 0;
      break;
    case "My Pig":
      player1GrandTotal += player1RunningTotal;
      // Code here to assign the current grand total to another player's grand total. Ensure that the win condition cannot be met through the banking of the previous line.
      break;
    case "Killer Pig":
  }
}

// player1RunningTotal += diceAddition();  // Adding the first roll to the player's total.

console.log(
  "dice ",
  dice[0],
  dice[1],
  " Roll  ",
  diceAddition(),
  " Running total ",
  player1RunningTotal,
  " Grand total ",
  player1GrandTotal
);

// -- Making a reroll button --
const rollButtonJS = document.getElementById("rollButton");

let reroll = [];

// In the reroll button we have said if the answer is a doublesEvent ie. a string then write this on the screen and don't
// add it to the running total.
reroll = rollButtonJS.addEventListener("click", function () {
  dice = diceRoll();
  if (isNaN(diceAddition())) {
    $("div.doublesAnnouncement").html(diceAddition());
  } else {
    player1RunningTotal += diceAddition();
    $("div.doublesAnnouncement").html(diceAddition());
    $("p#player1RunningTotal").html("Player 1 Running Total = " + player1RunningTotal);
  }
  console.log(
    // Big fat console log for the numbers after each roll.
    "dice ",
    dice[0],
    dice[1],
    " Roll  ",
    diceAddition(),
    " Running total ",
    player1RunningTotal,
    " Grand total ",
    player1GrandTotal
  );
});

// -- Making a bank button --
const bankButtonJS = document.getElementById("bankButton");

// Event listener for the bank button element
bank = bankButtonJS.addEventListener("click", () => {
  bankAndAddToGrandTotal();
});

// function that gets executed when bank button pressed
function bankAndAddToGrandTotal() {
  player1GrandTotal += player1RunningTotal;
  player1RunningTotal = 0;
  $("div.doublesAnnouncement").html("Banked!");
  $("p#player1GrandTotal").html("Player 1 Grand Total = " + player1GrandTotal);
  $("p#player1RunningTotal").html("Player 1 Running Total = " + player1RunningTotal);
  console.log("Player 1 Grand Total = ", player1GrandTotal);
}

// // attempting to add the
// player1GrandTotal += bankAndAddToGrandTotal();

// console.log(dice[0], dice[1], diceAddition(), player1RunningTotal, player1GrandTotal)
// function () += player1GrandTotal;

// Roll = roll of 2 dice - decide on outcome from those dice.  --
// write a function that when a button is clicked it will roll again.  --
// Hide the button when doubles are rolled, etc.
// write a function that will bank the total to the player's total when the bank button is used.
// Add this to an array so that we can display the scores totting up later down the line.
// Use a 'reduce' array function to add them from the array.
// Remember to clear the array (or at least reset the total) at the start of new games and with Fat pigs etc.

// Program what happens when it is a 1 or a double

// Display the totals for players

// Add win condition and allow to be customisable by player input

// Add 'my pig' button for whoever was fastest

// Add custom player names

// Add animation to the dice

// Add pig facts that pop up

// Add animation to display the addition for the die and disappear when it is a 1 or doubles, etc.
