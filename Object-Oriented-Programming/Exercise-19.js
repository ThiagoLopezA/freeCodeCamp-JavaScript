// Set the Child's Prototype to an instance of the parent
function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

function Dog() {
  Dog.prototype = Object.create(Animal.prototype);
}

// Only change code below this line

let beagle = new Dog();
