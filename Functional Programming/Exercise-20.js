// Combine an array into a string using the join method

function sentensify(str) {
  // Only change code below this line
  return str.split(/[^A-Za-z0-9_]/).join(" ");

  // Only change code above this line
}

sentensify("May-the-force-be-with-you");
