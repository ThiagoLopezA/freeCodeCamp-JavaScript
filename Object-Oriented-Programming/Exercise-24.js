// Use closure to protect properties within an object from being modified externally

// Closure -> acces to the context in which it was created

function Bird() {
  let weight = 15;

  this.getWeight = () => weight;
}
