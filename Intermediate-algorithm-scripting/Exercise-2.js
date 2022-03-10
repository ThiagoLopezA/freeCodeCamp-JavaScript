// Diff two arrays

let diffArray = (arr1, arr2) => {
  const newArr = [];
  arr1.forEach((e) => {
    if (arr2.indexOf(e) == -1) newArr.push(e);
  });
  arr2.forEach((e) => {
    if (arr1.indexOf(e) == -1) newArr.push(e);
  });
  return newArr;
};

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
