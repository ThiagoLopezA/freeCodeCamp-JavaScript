// Smallest common multiple

let smallestCommons = (arr) => {
  let start = Math.min(arr[0], arr[1]);
  let end = Math.max(arr[0], arr[1]);
  let number = null;
  let i = 1;
  while (number == null) {
    for (let j = start; j <= end; j++) {
      if (i % j == 0) {
        number = i;
      } else {
        number = null;
        i++;
        break;
      }
    }
  }
  return number;
};

let res = smallestCommons([2, 10]);
console.log(res);
