// Caesars Cipher

function rot13(str) {
  let rotSystem = [
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"],
    ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  ];
  let res = [];
  let toAnalize = str.split("").forEach((e) => {
    if (e.match(/[a-z]/i)) {
      if (rotSystem[0].indexOf(e) != -1) {
        res.push(rotSystem[1][rotSystem[0].indexOf(e)]);
      } else {
        res.push(rotSystem[0][rotSystem[1].indexOf(e)]);
      }
    } else {
      res.push(e);
    }
  });
  return res.join("");
}

let res = rot13("SERR PBQR PNZC");
console.log(res);
