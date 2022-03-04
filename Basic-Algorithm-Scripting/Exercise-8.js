// Truncate a String

function truncateString(str, num) {
  str = str.length > num ? str.slice(0, num) + "..." : str.slice(0, num);
  return str;
}

let res = truncateString("A-tisket a-tasket A green and yellow basket", 8);

console.log(res);
