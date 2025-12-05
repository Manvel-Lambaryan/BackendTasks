const first = require('./counter');
const second = require('./counter');
const third = require('./counter');

console.log("First Time", first);
console.log("Second Time", second);
console.log("Third Time", third);


console.log("REQUIRE CACHE:");
console.log(require.cache);