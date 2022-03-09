// Use higher-order functions map, filter, or reduce to solve a complex problem

const squareList = (arr) => {
  // Only change code below this line
  return arr.filter((e) => e > 0 && Number.isInteger(e)).map((e) => e * e);
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
