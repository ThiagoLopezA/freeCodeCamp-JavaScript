// Return a sorted array without changing the original array

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  let copiedArr = [...arr];
  return copiedArr.sort((a, b) => (a === b ? 0 : a > b ? 1 : -1));
}

nonMutatingSort(globalArray);
