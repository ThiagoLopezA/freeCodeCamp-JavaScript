// Copy Array Items Using Slice()

function forecast(arr) {
  arr = arr.slice(2, 4);
  return arr;
}

console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);
