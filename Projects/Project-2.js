// Roman numeral converter

let convertToRoman = (n) => {
  let romanInterval = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romanNumbers = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let temp = [];
  while (n != 0) {
    for (let i = 0; i < romanInterval.length; i++) {
      if (n - romanInterval[i] >= 0) {
        temp.push(romanNumbers[i]);
        n -= romanInterval[i];
        break;
      }
    }
  }
  return temp.join("");
};

let res = convertToRoman(891);
console.log(res);
