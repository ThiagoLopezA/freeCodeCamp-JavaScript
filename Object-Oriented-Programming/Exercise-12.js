// Understand the constructor property

// This is similar to use the instanceof Obj
// btw instance of is better

function Dog(name) {
  this.name = name;
}

function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}
