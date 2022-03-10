// Spinal tap case

function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

let res = spinalCase("The_Andy_Griffith_Show");
console.log(res);
