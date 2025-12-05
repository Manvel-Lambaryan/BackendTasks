const functionModule = require('./functionModule');
const objectModule = require('./objectModule');

console.log("Function module output:", functionModule("Manvel"));
console.log("Object module name:", objectModule.name);
console.log("Object module age:", objectModule.age);
console.log("Object module method:", objectModule.sayHi());