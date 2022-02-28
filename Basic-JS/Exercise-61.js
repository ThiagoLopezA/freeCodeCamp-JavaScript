// Comparison with the strict equality operator

function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);
