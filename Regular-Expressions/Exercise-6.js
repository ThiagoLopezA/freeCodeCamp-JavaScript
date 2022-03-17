// Find more than the first match

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
// g makes the match method find every single twinkle in the string
let result = twinkleStar.match(starRegex);
console.log(result);
