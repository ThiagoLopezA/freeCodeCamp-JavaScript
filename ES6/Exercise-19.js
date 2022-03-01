// Use getters and setters to control acces to an object

class Thermostat {
  constructor(temperature) {
    this._temperature = temperature;
  }
  // getter
  get temperature() {
    let celsius = (5 / 9) * (this._temperature - 32);
    return celsius;
  }
  // setter
  set temperature(temp) {
    let fahrenheit = (temp * 9.0) / 5 + 32;
    this._temperature = fahrenheit;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
