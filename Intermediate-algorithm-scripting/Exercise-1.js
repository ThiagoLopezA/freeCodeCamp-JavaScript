// Sum all numbers in a range

const sumAll = (arr) => {
  let res = 0;
  let start = Math.min(arr[0], arr[1]);
  let end = Math.max(arr[0], arr[1]);
  for (let i = start; i <= end; i++) {
    res += i;
  }
  return res;
};

sumAll([1, 4]);
