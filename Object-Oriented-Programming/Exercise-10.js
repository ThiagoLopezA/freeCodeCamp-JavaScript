// Use prototype properties to reduce duplicate code

function Dog(name) {
  this.name = name;
}

// Only change code above this line
let beagle = new Dog("Snoopy");
Dog.prototype.numLegs = 4;
// Put that prop for every single Dog object
// Another type of prop for objects
// So we can see 2 types : own property (declared in the object) and prototype prop ( declared with prototype)
