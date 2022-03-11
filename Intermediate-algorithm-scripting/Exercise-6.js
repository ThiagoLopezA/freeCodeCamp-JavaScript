// Pig Latin

function translatePigLatin(str) {
  let temp = [];
  let arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    if (/[aeiou]/.test(arr[i])) {
      break;
    } else {
      temp.push(arr[i]);
      arr[i] = null;
    }
  }

  temp.length == 0 ? temp.push("way") : temp.push("ay");
  temp.join();
  return arr
    .filter((e) => e != null)
    .concat(temp)
    .join("");
}

let res = translatePigLatin("schwartz");
console.log(res);
