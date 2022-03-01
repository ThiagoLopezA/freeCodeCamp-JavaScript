// Check for mixed grouping of characters

let myString = "Eleanor Roosevelt";
let myRegex = /(Eleanor|Franklin).*Roosevelt/;
let result = myRegex.test(myString);
