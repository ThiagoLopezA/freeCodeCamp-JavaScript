// Return Part of an Array Using the slice method

let sliceArray = (anim, beginSlice, endSlice) =>
  anim.slice(beginSlice, endSlice);

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
