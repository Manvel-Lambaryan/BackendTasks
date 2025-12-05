const fs = require('node:fs');

const raw = fs.readFileSync('./data.json',"utf8");
const obj = JSON.parse(raw);

obj.isStudent = true;
obj.skills.push("React");

const uptade = JSON.stringify(obj, null, 2);
fs.writeFileSync('./update.json', uptade);