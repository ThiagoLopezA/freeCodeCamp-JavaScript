// Make code more reusable with the this keyword

// Same bc in the last one i write this.numLegs instead of dog.numLegs
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs() {
    return `This dog has ${this.numLegs} legs.`;
  },
};

dog.sayLegs();
