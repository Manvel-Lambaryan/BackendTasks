const fs = require('node:fs');
const path = require('node:path');

const inputPath = process.argv[2];

console.log(path.dirname(inputPath));
console.log(path.basename(inputPath));
console.log(path.extname(inputPath));
console.log(path.parse(inputPath));

const raw = fs.readFileSync(inputPath, 'utf8');
const obj = JSON.parse(raw);

obj.timestamp = Date.now();

const outputDir = path.join(__dirname, "output");
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

const outputPath = path.join(outputDir, 'updated.json');
const updatedJSON = JSON.stringify(obj, null, 2);
fs.writeFileSync(outputPath, updatedJSON);

const buf = Buffer.from(updatedJSON);
console.log(buf.toString('hex'));

const back = Buffer.from(buf.toString('hex'), 'hex');
console.log(back.toString('utf8'));
