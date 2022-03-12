// Sum All Primes

function sumPrimes(num) {
  let temp = [];
  for (let i = 2; i <= num; i++) {
    let divisibleBy = 0;
    for (let j = 1; j <= num; j++) {
      if (i % j == 0) {
        divisibleBy++;
      }
    }
    if (divisibleBy <= 2) {
      temp.push(i);
    }
  }
  return temp.reduce((ac, e) => (ac += e));
}

let res = sumPrimes(977);
console.log(res);
