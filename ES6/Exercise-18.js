// Use class syntax to define a constructor function

class Vegetable {
  constructor(name) {
    this.name = name;
  }
}

const carrot = new Vegetable("carrot");
console.log(carrot.name); // Should display 'carrot'
