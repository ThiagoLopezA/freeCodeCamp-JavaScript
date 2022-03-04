// Chunky Monkey

function chunkArrayInGroups(arr, size) {
  let temp = [];
  for (let i = 0; i < arr.length; i += size) {
    temp.push(arr.slice(i, i + size));
  }
  return temp;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
