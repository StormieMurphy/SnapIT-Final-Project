const fs = require("fs");
const cone = require("./ingredients/cone_types.json");
const type = require("./ingredients/flavor_types.json");
const fruit = require("./ingredients/fruit_flavors.json");
const savory = require("./ingredients/savory_flavor.json");
const chocolate = require("./ingredients/chocolate_and_other_flavors.json");
const prompt = require("prompt-sync")({ sigint: true });

// // Function to display the menu and return the menu numbers as a string. This function also serves the concept of DRY (Don't Repeat Yourself) by avoiding code duplication.

const showMenu = (itemList) => {
  let menuNumbers = [];
  console.log();


// // Loop through the itemList and format each item for display.

  for (index = 0; index < itemList.length; index++) {
    const arr = [...itemList[index]];
    arr.splice(1, 0, "  - $");
    menuNumbers += (index + 1).toString();
    console.log(`${index + 1}. ${arr.join("")}`);
  }
  console.log();

// // Return the string of menu numbers.

  return menuNumbers;
};

const showMenuWithoutPrice = (itemList) => {
  let menuNumbers = [];
  console.log();


// // Loop through the itemList and format each item for display.

  for (index = 0; index < itemList.length; index++) {
    const arr = [...itemList[index]];
    arr.splice(1, 0, " ");
    menuNumbers += (index + 1).toString();
    console.log(`${index + 1}. ${arr.join("")}`);
  }
  console.log();

// // Return the string of menu numbers.

  return menuNumbers;
}

// // Function to prompt the user for input and validate it against the menu numbers.

const promptUser = (promptMsgOne, promptMsgTwo, menuNumbers) => {
  let choice = prompt(promptMsgOne);


// // Ensure the choice is a single character and is included in the menu numbers.

while (!menuNumbers.includes(choice)) {
    choice = prompt(promptMsgTwo);
  }
  return choice;
};

// // Function to check if the input is a valid 'Y' or 'N'.

exports.checkYorN = function (input) {
  return "ynYN".includes(input) && input.length == 1;
};

// Function to choose a cone from the available options.
exports.chooseYourCone = () => {
//   // Convert the cone object into an array of entries and display the menu.
  const cones = Object.entries(cone);

//   // Show the menu and prompt the user to choose a cone.
  const menuNumbers = showMenu(cones);

//   // Prompt the user for their choice, ensuring it matches the menu numbers.
  const coneChoice = promptUser(
    "Please choose your cone: ",
    "Please enter only the numbers on the menu: ",
    menuNumbers
  );

//  // If the user chooses a cone from the menu's number, return the selected cone.

return coneChoice;
};

//  // Function to choose flavor category (fruit, savory, chocolate and other) from the available options.

exports.chooseYourFlavorType = () => {

  //Convert the flavor type object into an array of entries and display the menu.

  const types = Object.entries(type);

  //Show the menu and prompt the user to choose a flavor type.

  const menuNumbers = showMenuWithoutPrice(types);
  const typeChoice = promptUser(
  "Which flavor would you like? ",
  "Please enter only the numbers on the menu: ",
  menuNumbers
  );

  return typeChoice;

};

// // Convert the chosen flavor category object into an array of entries and display the menu. Make sure it displays a different menu depending on what flavor category the user chooses.
// // Show the menu and prompt the user to choose fruit flavor.
exports.chooseYourFruit = () => {
//   // Convert the fruit object into an array of entries and display the menu.
  const fruit_flavors = Object.entries(fruit);

// Read the fruit_flavors.json file and split it into an array of flavor options.
const fruitList = Object.entries(fruit);

//   // Prompt the user for their choice, ensuring it matches the menu numbers.
  const fruitChoice = promptUser(
    "Please choose your flavor: ",
    "Please enter only the numbers on the menu: ",
    menuNumbers
  );

  return fruitList[parseInt(fruitChoice) - 1];
};
//catch (error) 
{
  console.log("Error reading fruit_flavors.json file!");
};
// // // Show the menu and prompt the user to choose savory flavor.
exports.chooseYourSavory = () => {
  const savory_flavors = Object.entries(savory);

//   // Show the menu and prompt the user to choose a fruit flavor.
  const menuNumbers = showMenu(savory_flavors);

//   // Prompt the user for their choice, ensuring it matches the menu numbers.
  const savoryChoice = promptUser(
    "Please choose your flavor: ",
    "Please enter only the numbers on the menu: ",
    menuNumbers
  );

//  // If the user chooses a flavor from the menu's number, return the selected flavor.

return savoryList[parseInt(savoryChoice) - 1];
};
// // // Show the menu and prompt the user to choose chocolate/other flavor.
exports.chooseYourChocolate = () => {
    const chocolate_and_other_flavors = Object.entries(chocolate);

//   // Show the menu and prompt the user to choose a fruit flavor.
  const menuNumbers = showMenu(chocolate_and_other_flavors);

//   // Prompt the user for their choice, ensuring it matches the menu numbers.
  const chocolateChoice = promptUser(
    "Please choose your flavor: ",
    "Please enter only the numbers on the menu: ",
    menuNumbers
  );

//  // If the user chooses a flavor from the menu's number, return the selected flavor.

  return chocolateChoice;
};

//calculate the price of the icecream shop.
exports.getTotalCost = (orderedIceCream) => {
  let flavorCost = 0;

  // Check if it's a Fruit flavor
  if (orderedIceCream.fruit) {
    flavorCost = parseFloat(orderedIceCream.fruit.slice(1));
  }
  // Else check if it's a Savory flavor
  else if (orderedIceCream.savory) {
    flavorCost = parseFloat(orderedIceCream.savory.slice(1));
  }
  // Else check if it's a Chocolate flavor
  else if (orderedIceCream.chocolate) {
    flavorCost = parseFloat(orderedIceCream.chocolate.slice(1));
  }

  // Calculate the total cost like bun + cheese + meat + veggies
  
    return (parseFloat(orderedIceCream.cone[1]) + flavorCost).toFixed(2); // return as string with 2 decimals
};