// Check if an object has a property

let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

/*
<!-- Best option in my mind but bruh -->
function isEveryoneHere(userObj) {
  let usersInfo = ["Alan", "Jeff", "Sarah", "Ryan"];
  for (let i = 0; i < usersInfo.length; i++) {
    if (userObj.hasOwnProperty(usersInfo[i])) {
      if (i == usersInfo.length - 1) {
        return true;
      }
    } else {
      return false;
    }
  }
}
*/

function isEveryoneHere(userObj) {
  if (
    userObj.hasOwnProperty("Alan") &&
    userObj.hasOwnProperty("Jeff") &&
    userObj.hasOwnProperty("Sarah") &&
    userObj.hasOwnProperty("Ryan")
  ) {
    return true;
  }
  return false;
}

console.log(isEveryoneHere(users));
