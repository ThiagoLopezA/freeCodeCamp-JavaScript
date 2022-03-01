// Using objects for lookups

function phoneticLookup(val) {
  let result = "";
  const options = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };
  let result = options[val];
  return result;
}
