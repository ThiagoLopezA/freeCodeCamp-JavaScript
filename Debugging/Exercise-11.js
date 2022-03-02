// Use caution when reinitializing variables inside a loop

function zeroArray(m, n) {
  let newArray = [];
  for (let i = 0; i < m; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      console.log("j");
      row.push(0);
    }
    newArray.push(row);
    console.log("i");
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
