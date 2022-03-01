// Positive and negative lookahead

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2,})/gi; // Change this line
let result = pwRegex.test(sampleWord);
