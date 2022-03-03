// Check for the presence of an Element with indexOf()

function quickCheck(arr, elem) {
  if (arr.indexOf(elem) == -1) {
    return false;
  }
  return true;
}

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
