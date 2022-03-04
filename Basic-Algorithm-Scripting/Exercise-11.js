// Title case a sentence

function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((val) => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(" ");
}

let res = titleCase("I'm a little tea pot");
console.log(res);
