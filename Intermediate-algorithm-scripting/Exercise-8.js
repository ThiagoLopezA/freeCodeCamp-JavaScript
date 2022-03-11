// DNA Pairing

/*
A -> T
T -> A
C -> G
G -> C
*/

function pairElement(str) {
  let temp = str.split("");
  let res = [];

  temp.forEach((e) => {
    switch (e) {
      case "A":
        res.push(["A", "T"]);
        break;
      case "T":
        res.push(["T", "A"]);
        break;
      case "C":
        res.push(["C", "G"]);
        break;
      case "G":
        res.push(["G", "C"]);
        break;
    }
  });

  return res;
}

res = pairElement("GCG");
console.log(res);
