// Telephone Number validator

// NOT SOLVED AT THE MOMENT

// 10 - 11 numbers
// Symbols => - ()

// Cases
/*
555-555-5555
555 555 5555
5555555555
1 555 555 5555
1 555-555-5555
1 (555) 555-5555
1 (555)555-5555

(555)555-5555
(555) 555-5555
*/

let telephoneCheck = (str) => {
  let regex =
    /(^(5|1|\()(\d{8}|\d{2}[\s-]\d{3}[\s-]\d{3}|\s\d{3}[\s-]\d{3}[\s-]\d{3}|\s\(\d{3}\)\s\d{3}\-\d{3}|\s\(\d{3}\)\d{3}\-\d{3}|\d{3}\)\s\d{3}\-\d{3}|\d{3}\)\d{3}\-\d{3}|\(\d{3}\)\d{3}\-\d{3})\d$)/gm;
  return regex.test(str);
};

let res = telephoneCheck("1 555-555-5555");
console.log(res);

// If you want to make it faster, https://regex101.com/r/iK1jY6/3
// U can see while you are writing the regex if you are matching the str
