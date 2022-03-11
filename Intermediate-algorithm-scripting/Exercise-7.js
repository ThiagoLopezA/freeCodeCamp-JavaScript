// Search and replace

function myReplace(str, before, after) {
  let index = str.indexOf(before);

  if (str[index] === str[index].toUpperCase()) {
    console.log("Entra aca");
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    console.log("Entra acaaaa");
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }

  return str.replace(before, after);
}

let res = myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
console.log(res);
