// The value of each currency will be multiplied by 100
// because it's more easy to work with integers numbers
const DATA = {
  PENNY: 1,
  NICKEL: 5,
  DIME: 10,
  QUARTER: 25,
  ONE: 100,
  FIVE: 500,
  TEN: 1000,
  TWENTY: 2000,
  "ONE HUNDRED": 10000,
};

let checkCashRegister = (price, cash, cid) => {
  let changeAmount = cash * 100 - price * 100;
  let changeAmountCopy = changeAmount; // We need a copy bc one of them it's going to be modified
  let change = [];
  let status = "";

  let cidSum = 0;
  let newCid = cid.filter((e) => e[1] !== 0).reverse(); // In this line we filter the cid array because we need to work with the currency that isn't empty.

  newCid.forEach((e) => {
    let curr = e[0];
    let currSum = e[1] * 100;
    cidSum += currSum;
    let amount = 0;
    while (changeAmount >= DATA[curr] && currSum > 0) {
      amount += DATA[curr];
      changeAmount -= DATA[curr];
      currSum -= DATA[curr];
    }
    if (amount !== 0) {
      change.push([curr, amount / 100]);
    }
  });

  if (changeAmount > 0) {
    status = "INSUFFICIENT_FUNDS";
    change = [];
  } else if (changeAmount == 0 && changeAmountCopy == cidSum) {
    status = "CLOSED";
    change = cid;
  } else {
    status = "OPEN";
  }
  return { status: status, change: change };
};

let res = checkCashRegister(19.5, 20, [
  ["PENNY", 15],
  ["NICKEL", 15],
  ["DIME", 15],
  ["QUARTER", 0],
  ["ONE", 1],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);
console.log(res);
