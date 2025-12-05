const car = require("./Car.cjs");

const firstCar = new car("BMW", "M5 F90", 2015);
const secondCar = new car("BMW", "M5 F30", 2013);

console.log(firstCar.getInfo());
console.log(secondCar.drive());
