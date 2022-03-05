// Change the prototype to a new object

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs: 4,
  eat() {
    console.log("I'm eating...");
  },
  describe() {
    console.log("I'm a dog");
  },
};
