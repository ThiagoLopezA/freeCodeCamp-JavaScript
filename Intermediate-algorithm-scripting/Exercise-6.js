// Pig Latin

function translatePigLatin(str) {
  let newStr = str.split("");
  let regex = /[aeiou]i/;
  if (regex.test(newStr[0])) {
    return str.concat("way");
  } else {
    let aux = [];
    for (let i = 0; i < newStr.length; i++) {
      if (regex.test(newStr[i])) {
        aux.push("way").join("");
        newStr = newStr.filter((e) => e != null);
        newStr.join("").concat(aux);
        return newStr;
      } else {
        aux.push(newStr[i]);
        delete newStr[i];
      }
    }
  }
}

let res = translatePigLatin("consonant");
console.log(res);
