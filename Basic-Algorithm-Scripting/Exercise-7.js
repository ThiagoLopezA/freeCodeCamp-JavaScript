// Repeat a String Repeat a String

function repeatStringNumTimes(str, num) {
  let repeated = "";

  for (let i = 0; i < num; i++) {
    repeated += str;
  }

  str = repeated;

  return str;
}

repeatStringNumTimes("abc", 3);
