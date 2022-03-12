// Sorted Union

let uniteUnique = (...arr) => {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i].forEach((e) => {
      if (temp.indexOf(e) == -1) {
        temp.push(e);
      }
    });
  }
  return temp;
};

let res = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(res);
