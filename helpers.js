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

  for (let index = 0; index < itemList.length; index++) {
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
  for (index = 0; index < itemList.length; index++) {
    const arr = [...itemList[index]];
    arr.splice(1, 0, " ");
    menuNumbers += (index + 1).toString();
    console.log(`${index + 1}. ${arr.join("")}`);
  }
  console.log();
  return menuNumbers;
}

// // Function to prompt the user for input and validate it against the menu numbers.

const promptUser = (promptMsgOne, promptMsgTwo, menuNumbers) => {
  let choice = prompt(promptMsgOne);

// // Ensure the choice is a single character and is included in the menu numbers.

  while (!menuNumbers.includes(choice) || choice === "" || choice < 1) 
  {
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

  return cones[parseInt(coneChoice) - 1]; 

//  // If the user chooses a cone from the menu's number, return the selected cone.
  //return coneChoice;
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
  //returns just the flavor category name
  return types[parseInt(typeChoice) - 1][0];

};

// // Convert the chosen flavor category object into an array of entries and display the menu. Make sure it displays a different menu depending on what flavor category the user chooses.
// // Show the menu and prompt the user to choose fruit flavor.
exports.chooseYourFruit = () => {

//   // Convert the fruit object into an array of entries and display the menu.
  const fruit_flavors = Object.entries(fruit);

// Read the fruit_flavors.json file and split it into an array of flavor options.
const fruitList = Object.entries(fruit);

  const menuNumbers = showMenu(fruit_flavors);

//   // Prompt the user for their choice, ensuring it matches the menu numbers.
  const fruitChoice = promptUser(
    "Please choose your flavor: ",
    "Please enter only the numbers on the menu: ",
    menuNumbers
  );

return fruit_flavors[parseInt(fruitChoice) - 1];
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

  return savory_flavors[parseInt(savoryChoice) - 1];
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

  return chocolate_and_other_flavors[parseInt(chocolateChoice) - 1];
};

// Function to calculate the total cost of the ordered cone.
exports.getTotalCost = (orderedIceCream) => {
  const coneCost = parseFloat(orderedIceCream.cone[1]);
  
  let flavorCost = 0;
  
  // Check which flavor type exists and get its cost
  if (orderedIceCream.fruit) {
    flavorCost = parseFloat(orderedIceCream.fruit[1]);
  } else if (orderedIceCream.savory) {
    flavorCost = parseFloat(orderedIceCream.savory[1]);
  } else if (orderedIceCream.chocolate) {
    flavorCost = parseFloat(orderedIceCream.chocolate[1]);
  }
  
  const total = coneCost + flavorCost;
  return total.toFixed(2);
}
