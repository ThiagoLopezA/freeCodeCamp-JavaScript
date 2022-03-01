// Use destructuring assignment to extract values from objects

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

/*
  ES5
  const today = HIGH_TEMPERATURES.today;
  const tomorrow = HIGH_TEMPERATURES.tomorrow;
*/

// ES6
const { today, tomorrow } = HIGH_TEMPERATURES;
