// Remove elements from an array using slice instead of splice

let nonMutatingSplice = (cities) => cities.slice(0, 3);

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];

let res = nonMutatingSplice(inputCities);
console.log(res);
