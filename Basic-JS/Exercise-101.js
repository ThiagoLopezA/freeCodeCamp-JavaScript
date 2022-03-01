// Nesting For Loops

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    let subArr = arr[i];
    for (let j = 0; j < subArr.length; j++) {
      product *= subArr[j];
    }
  }
  // Only change code above this line
  return product;
}

multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);
