const utils = require("./utils/index.cjs");

console.log("Formatted Date:", utils.date(new Date()));
console.log("Random Number 1-10:", utils.random(1, 10));

console.log(utils.logger("This is an example log message!"));
