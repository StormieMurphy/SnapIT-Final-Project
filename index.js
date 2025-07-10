const helpers = require('./helpers');

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
  "\n||\t\t\t\t||\n||\tLISA\'s ICE CREAM\t||\n||\t\t\t\t||\n" +
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
  process.exit(0);
} 

//   // Get all the necessary data from the user to create an ice cream cone.
while (userInput.toLowerCase() === "y") {
  const type = chooseYourFlavorType();

  let fruit = "";
  let savory = "";
  let chocolate = "";

  if (type === "Fruit") {
    fruit = chooseYourFruit();
  } else if (type === "Savory") {
    savory = chooseYourSavory();
  } else {
    chocolate = chooseYourChocolate();
  }

  const cone = chooseYourCone();

  const orderedIceCream = new iceCream(cone, type, fruit, savory, chocolate);

  console.log("\nYour ice cream:");
  console.log(`Cone: ${orderedIceCream.cone[0]}`);

  if (orderedIceCream.fruit) {
    console.log(`Flavor: ${orderedIceCream.fruit[0]}`);
  }
  if (orderedIceCream.savory) {
    console.log(`Flavor: ${orderedIceCream.savory[0]}`);
  }
  if (orderedIceCream.chocolate) {
    console.log(`Flavor: ${orderedIceCream.chocolate[0]}`);
  }

  console.log(`Total: $${helpers.getTotalCost(orderedIceCream)}\n`);


 

  userInput = prompt("Would you like to buy another one? y or n: ");
  while (!checkYorN(userInput)) {
    userInput = prompt('Please enter letter "Y" or letter "N": ');
  }

  if (userInput.toLowerCase() === "n") {
    console.log("Thank you for coming!");
    process.exit(0);
  }
}

  


