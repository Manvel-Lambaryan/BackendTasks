const first = require('./counter');
delete require.cache[require.resolve("./counter")];

const second = require('./counter');
delete require.cache[require.resolve("./counter")];

const third = require('./counter');
console.log("Values: ", first, second, third)