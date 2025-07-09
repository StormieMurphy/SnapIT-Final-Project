// Import external packages, modules, and functions. prompt-sync is an external package. You need to execute `npm install prompt-sync@4.2.0` in the terminal to install it.
const prompt = require("prompt-sync")({ sigint: true });
const {
  checkYorN,
  chooseYourFlavorType,
  chooseYourFruit,
  chooseYourSavory,
  chooseYourChocolate,
  chooseYourCone,
  getTotalCost
} = require("./helpers.js");
const iceCream = require("./IceCream.js");
// Define necessary variables for the program.
const shopTitle =
  "==================================" +
  "\n||\t\t\t\t\t\t||\n||\tLISA\'s ICE CREAM\t||\n||\t\t\t\t||\n" +
  "==================================";
const welcomeStr = "Welcome to Lisa's Ice Cream shop!\n";

// Print the shop title and welcome message to the console.

console.log(shopTitle);
console.log(welcomeStr);

// Prompt a user for an input.

let userInput = prompt("Would you like to buy an ice cream Y or N? ");

// // If the user's input is invalid, keep asking until a valid input is provided.

while (!checkYorN(userInput)) {
  userInput = prompt('Please enter letter "Y" or letter "N": ');
}

// Check the user's input to whether or not run the program.

if (userInput.toLowerCase() == "n") {
  console.log("Thank you for coming, bye!");
} else {
//   // Get all the necessary data from the user to create an ice cream cone.
while (userInput.toLowerCase() === "y") {
  const type = chooseYourFlavorType();

  let fruit = "";
  let savory = "";
  let chocolate = "";

  if (type[0] === "Fruit") {
    fruit = chooseYourFruit();
  } else if (type[0] === "Savory") {
    savory = chooseYourSavory();
  } else {
    chocolate = chooseYourChocolate();
  }

  const cone = chooseYourCone();

  const orderedIceCream = new iceCream(cone, type, fruit, savory, chocolate);

  console.log("Your ice cream is being made. Please wait...");

  setTimeout(() => {
    console.log("Your ice cream is ready!");
    orderedIceCream.showInfo();
    console.log(`\nTotal cost: $${getTotalCost(orderedIceCream)}`);
  }, 2000);

  userInput = prompt("Would you like to buy another one? y or n: ");
  while (!checkYorN(userInput)) {
    userInput = prompt('Please enter letter "Y" or letter "N": ');
  }

  if (userInput.toLowerCase() === "n") {
    console.log("Thank you for coming!");
  }
}

  
}

// Instantiate a new iceCream object with the user's choices.

  // const orderedIceCream = new iceCream(cone, type, fruit, savory, chocolate);

  // console.log("Your ice cream is being made. Please wait...");


// Simulate a delay to mimic the ice cream preparation time.

//  setTimeout(() => {
//     console.log("Your ice cream is ready!");
//     orderedIceCream.showInfo();
//     console.log(`\nTotal cost: $${getTotalCost(orderedIceCream)}`);
//   }, 3000);