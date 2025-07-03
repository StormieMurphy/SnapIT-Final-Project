const fs = require("fs");
const cone = require("./ingredients/cone_types.json");
const type = require("./ingredients/flavor_types.json");
const fruit = require("./ingredients/fruit_flavors.json");
const savory = require("./ingredients/savory_flavor.json");
const chocolate = require("./ingredients/chocolate_and_other_flavors.json");
const prompt = require("prompt-sync")({ sigint: true });

// // Function to display the menu and return the menu numbers as a string. This function also serves the concept of DRY (Don't Repeat Yourself) by avoiding code duplication.

const showMenu = (itemList) => {
  let menuNumbers = "";
  console.log();


// // Loop through the itemList and format each item for display.

  for (index = 0; index < itemList.length; index++) {
    const arr = [...itemList[index]];
    arr.splice(1, 0, " - $");
    menuNumbers += (index + 1).toString();
    console.log(`${index + 1}. ${arr.join("")}`);
  }
  console.log();

// // Return the string of menu numbers.

  return menuNumbers;
};

// // Function to prompt the user for input and validate it against the menu numbers.

const promptUser = (promptMsgOne, promptMsgTwo, menuNumbers) => {
  let choice = prompt(promptMsgOne);


// // Ensure the choice is a single character and is included in the menu numbers.

  while (!(menuNumbers.includes(choice) && choice.length == 1)) {
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

  return cones[parseInt(coneChoice) - 1];
};

//  // Function to choose flavor category (fruit, savory, chocolate and other) from the available options.

exports.chooseYourFlavorType = () => {

  //Convert the flavor type object into an array of entries and display the menu.

  const types = Object.entries(type);

  //Show the menu and prompt the user to choose a flavor type.

  const menuNumbers = showMenu(types);
  const typeChoice = promptUser(
  "Which flavor would you like? ",
  "Please enter only the numbers on the menu: ",
  menuNumbers
  );

return types[parseInt(typeChoice) - 1];

};

// // Convert the chosen flavor category object into an array of entries and display the menu. Make sure it displays a different menu depending on what flavor category the user chooses.
// switch (menuNumbers)
// // Show the menu and prompt the user to choose fruit flavor.
// exports.chooseYourFruit = () => {
//   try {
//     let menuNumbers = "";
// case 1:
// // Read the fruit_flavors.json file and split it into an array of flavor options.
//     const fruitList = fs
//       .readFileSync(".\\ingredients\\fruit_flavors.json", "utf8", { encoding: "utf8" })
//       .split("\r\n")
//       .slice(0, -1);

//     console.log();
// //     // Loop through the savoryList and format each flavor option for display.
//     for (index = 0; index < fruitList.length; index++) {
//       const fruitMenu = [
//         `${index + 1}. `,
//         fruitList[index].slice(0, -5),
//         " - $",
//         fruitList[index].slice(-4, fruitList[index].length)
//       ].join("");
//       menuNumbers += (index + 1).toString();
//       console.log(fruitMenu);
//     }
//     console.log();

// //     // Prompt the user to choose flavor, ensuring it matches the menu numbers.
//     const fruitChoice = promptUser(
//       "Please choose your flavor: ",
//       "Please enter only the numbers on the menu: ",
//       menuNumbers
//     );
  
// //     // If the user chooses a flavor from the menu's number, return the selected flavor.
//     return fruitList[parseInt(fruitChoice) - 1];

// //     // If there's an error reading the fruit_flavors.txt file, log an error message.
//   } catch (error) {
//     console.log("Error opening fruit_flavors.txt file!");
//   }
// };
// break;
// case 2:
// // // Show the menu and prompt the user to choose savory flavor.
// exports.chooseYourSavory = () => {
//   try {
//     let menuNumbers = "";

// //     // Read the savory_flavor.json file and split it into an array of flavor options.
//     const savoryList = fs
//       .readFileSync(".\\ingredients\\savory_flavor.json", "utf8", { encoding: "utf8" })
//       .split("\r\n")
//       .slice(0, -1);

//     console.log();
// //     // Loop through the savoryList and format each flavor option for display.
//     for (index = 0; index < savoryList.length; index++) {
//       const savoryMenu = [
//         `${index + 1}. `,
//         savoryList[index].slice(0, -5),
//         " - $",
//         savoryList[index].slice(-4, savoryList[index].length)
//       ].join("");
//       menuNumbers += (index + 1).toString();
//       console.log(savoryMenu);
//     }
//     console.log();

// //     // Prompt the user to choose flavor, ensuring it matches the menu numbers.
//     const savoryChoice = promptUser(
//       "Please choose your flavor: ",
//       "Please enter only the numbers on the menu: ",
//       menuNumbers
//     );
  
// //     // If the user chooses a flavor from the menu's number, return the selected flavor.
//     return savoryList[parseInt(savoryChoice) - 1];

// //     // If there's an error reading the savory_flavor.txt file, log an error message.
//   } catch (error) {
//     console.log("Error opening savory_flavor.txt file!");
//   }
// };
// break;
// case 3:
// // // Show the menu and prompt the user to choose chocolate/other flavor.
// exports.chooseYourChocolate = () => {
//   try {
//     let menuNumbers = "";

// //     // Read the chocolate_and_other_flavors.json file and split it into an array of flavor options.
//     const chocolateList = fs
//       .readFileSync(".\\ingredients\\chocolate_and_other_flavors.json", "utf8", { encoding: "utf8" })
//       .split("\r\n")
//       .slice(0, -1);

//     console.log();
// //     // Loop through the chocolateList and format each flavor option for display.
//     for (index = 0; index < chocolateList.length; index++) {
//       const chocolateMenu = [
//         `${index + 1}. `,
//         chocolateList[index].slice(0, -5),
//         " - $",
//         chocolateList[index].slice(-4, chocolateList[index].length)
//       ].join("");
//       menuNumbers += (index + 1).toString();
//       console.log(chocolateMenu);
//     }
//     console.log();

// //     // Prompt the user to choose flavor, ensuring it matches the menu numbers.
//     const chocolateChoice = promptUser(
//       "Please choose your flavor: ",
//       "Please enter only the numbers on the menu: ",
//       menuNumbers
//     );
  
// //     // If the user chooses a flavor from the menu's number, return the selected flavor.
//     return chocolateList[parseInt(chocolateChoice) - 1];

// //     // If there's an error reading the savory_flavor.txt file, log an error message.
//   } catch (error) {
//     console.log("Error opening chocolate_and_other_flavors.txt file!");
//   }
// };
// break;
// // Function to calculate the total cost of the ordered ice cream cone.

// // exports.getTotalCost = (orderedIceCream) => {

// //  // Calculate the total cost of the ice cream cone by adding the cone and flavor and return it as a string formatted to two decimal places.

// //   return (
// //     orderedIceCream.cone.pop() +
// //     parseFloat(orderedIceCream.fruit.slice(-4)) +
// //     parseFloat(orderedIceCream.savory.slice(-4)) +
// //     parseFloat(orderedIceCream.chocolate.slice(-4)) +
// //   ).toFixed(2);
// // };
