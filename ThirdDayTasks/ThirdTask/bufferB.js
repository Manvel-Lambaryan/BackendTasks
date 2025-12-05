const buf = Buffer.from('Hello World');

console.log(buf.toString('utf8'));
console.log(buf.toString('hex'));
console.log(buf.toString('base64'));

const hex = buf.toString('Hex');
const back = Buffer.from(hex, 'hex');

console.log(back.toString('utf8'));