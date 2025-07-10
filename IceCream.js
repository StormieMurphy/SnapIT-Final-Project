// iceCream class definition

class iceCream {

  // Private fields to store the properties of the ice cream

  #cone;
  #type;
  #fruit;
  #savory;
  #chocolate;

// Constructor to initialize the ice cream with the cone and flavor

  constructor(cone, type, fruit, savory, chocolate) {
    this.#cone = cone;
    this.#type = type;
    this.#fruit = fruit;
    this.#savory = savory;
    this.#chocolate = chocolate;
  }
  //  // Getters to access the private fields
  get cone() {
    return this.#cone;
  }
  get type() {
    return this.#type;
}
  get fruit() {
    return this.#fruit;
  }
  get savory() {
    return this.#savory;
  }
  get chocolate() {
    return this.#chocolate;
  }

   // Method to display the ice cream information

  showInfo() {
    const cone = this.#cone[0];
    const type = this.#type[0];
    const fruit = this.#fruit ? this.#fruit[0] : null;
    const savory = this.#savory ? this.#savory[0] : null;
    const chocolate = this.#chocolate ? this.#chocolate[0] : null;

   // Log the ice cream details to the console

   console.log(`\nYour ice cream:\nCone -> ${cone}`);
   if (fruit) console.log(`Flavor -> ${fruit}`);
   if (savory) console.log(`Flavor -> ${savory}`);
   if (chocolate) console.log(`Flavor -> ${chocolate}`);
  }
}
   // Export the iceCream class so it can be used in other files

   module.exports = iceCream;