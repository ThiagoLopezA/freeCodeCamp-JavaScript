// Split a string into an array using the split method

function splitify(str) {
  return str.split(/[^A-Za-z0-9_]/);
}

splitify("Hello World,I-am code");
