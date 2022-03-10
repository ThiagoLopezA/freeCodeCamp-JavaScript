// Wherefore art thou

function whatIsInAName(collection, source) {
  const arr = [];
  let srcProps = Object.keys(source);
  // Only change code below this line
  return collection.filter((obj) => {
    for (let i = 0; i < srcProps.length; i++) {
      if (
        !obj.hasOwnProperty(srcProps[i]) ||
        obj[srcProps[i]] !== source[srcProps[i]]
      ) {
        return false;
      }
    }
    return true;
  });

  // Only change code above this line
}

let res = whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);

console.log(res);
