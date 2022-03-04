// Slice and Splice

function frankenSplice(arr1, arr2, n) {
  let arr = arr2.slice(0, n);
  arr1.forEach((e) => arr.push(e));
  arr2.slice(n).forEach((e) => arr.push(e));
  arr2 = arr;
  return arr2;
}

let res = frankenSplice([1, 2, 3], [4, 5, 6], 1);
console.log(res);
