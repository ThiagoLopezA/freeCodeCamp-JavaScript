// Implement the filter method on a prototype

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
  // Only change code below this line
  const newArray = [];
  this.forEach((e) => {
    if (callback(e)) newArray.push(e);
  });
  // Only change code above this line
  return newArray;
};

const new_s = s.myFilter(function (item) {
  return item % 2 === 1;
});
