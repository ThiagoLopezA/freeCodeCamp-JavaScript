// Arguments Optional

function addTogether() {
  const [num1, num2] = arguments;
  if (typeof num1 !== "number") return undefined;
  if (num2 === undefined) return (num2) => addTogether(num1, num2);
  if (typeof num2 !== "number") return undefined;
  return num1 + num2;
}

let res = addTogether(2);
console.log(res);
