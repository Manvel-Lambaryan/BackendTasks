const path = require('node:path');

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

const fullPath = path.join('/users/manvel/projects/app/index.js');
console.log(fullPath);