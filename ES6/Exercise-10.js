// Use destructuring assignment to assign variables from objects

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

/*
  ES5
  const highToday = HIGH_TEMPERATURES.today;
  const highTomorrow = HIGH_TEMPERATURES.tomorrow; 
*/

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
