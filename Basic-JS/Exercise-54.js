// Global vs. Local Scope in Functions

const outerWear = "T-Shirt";

function myOutfit() {
  let outerWear = "sweater";

  return outerWear;
}

myOutfit();
