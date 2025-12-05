const allocated = Buffer.alloc(10);

allocated[0] = 65;
allocated[1] = 66;
allocated[2] = 67;

console.log(allocated);
console.log(allocated.toString("utf8"));
