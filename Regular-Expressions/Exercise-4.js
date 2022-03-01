// Ignore case while matching

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
// i flag : ignores upper-lowercase
let result = fccRegex.test(myString);
