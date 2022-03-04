// Factorialize a number

function factorialize(num) {
  let res = 1;
  for (let i = num; i > 0; i--) {
    res *= i;
  }
  num = res;
  return num;
}

console.log(factorialize(5));
