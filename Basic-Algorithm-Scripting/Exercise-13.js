// Falsy Bouncer

// Falsy values = false, null, 0, "", undefined, NaN

function bouncer(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) temp.push(arr[i]);
  }
  return temp;
}

let res = bouncer([false, null, 0, NaN, undefined, ""]);
console.log(res);
