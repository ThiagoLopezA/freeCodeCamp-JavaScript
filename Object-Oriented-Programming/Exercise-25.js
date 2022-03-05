// Understand the Immediately Invoked Function Expression (IIFE)

/*
function makeNest() {
  console.log("A cozy nest is ready");
}

makeNest();
*/

(() => console.log("A cozy nest is ready"))();
