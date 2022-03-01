// Write concise object literal declarations using object property shorthand

/*
const createPerson = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender
  };
};
*/

// Solution

const createPerson = (name, age, gender) => ({ name, age, gender });
