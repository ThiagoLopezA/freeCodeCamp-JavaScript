// Seek and destroy

let destroyer = (arr, ...numbers) => {
  let newArr = [...arr];
  let n = [...numbers];

  for (let i = 0; i < newArr.length; i++) {
    n.forEach((e) => {
      if (e === newArr[i]) {
        delete newArr[i];
      }
    });
  }

  return newArr.filter((e) => e != null);
};

let res = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(res);
