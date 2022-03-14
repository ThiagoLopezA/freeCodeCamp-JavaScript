// Telephone Number validator

// NOT SOLVED AT THE MOMENT

// 10 - 11 numbers
// Symbols => - ()

let telephoneCheck = (str) => {
  let arr = str.split("").filter((e) => e.match(/[()\- || 1-9]/));

  if (arr.length != str.length) {
    return false;
  } else {
    let counter = 0;
    arr.forEach((e) => {
      if (e.match(/[0-9]/)) counter++;
    });
    if (counter >= 10 && counter <= 11) {
      return true;
    } else {
      return false;
    }
  }
};

let res = telephoneCheck("11555-555-5555");
console.log(res);
