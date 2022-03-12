// Everything be true

function truthCheck(collection, pre) {
  var counter = 0;
  for (var c in collection) {
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }
  return counter == collection.length;
}
