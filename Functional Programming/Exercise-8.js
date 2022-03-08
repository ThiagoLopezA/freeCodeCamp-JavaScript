// Implement  map on a prototype

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
  const newArray = [];
  this.forEach((e) => newArray.push(e * 2));
  return newArray;
};

const new_s = s.myMap(function (item) {
  return item * 2;
});
