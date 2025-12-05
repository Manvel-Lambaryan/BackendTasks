const path = require("node:path");

const messy = "//folder///sub/../test//file.txt";
console.log(path.normalize(messy));

const parsed = path.parse("users/manvel/projects/app/index.js");
console.log(parsed);

const formatted = path.format(parsed);
console.log(formatted);