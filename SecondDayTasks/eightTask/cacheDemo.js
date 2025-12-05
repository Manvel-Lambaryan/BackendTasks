const myCache = {};

const myRequire = (path, loader) => {
    if(myCache[path]) {
        console.log("Loaded from cache", path);
        return myCache[path].exports;
    }

    console.log("Executing module", path);

    const module = {exports : {}};
    myCache[path] = module;

    loader(module, module.exports);

    return module.exports;
}

const moduleA = (module, exports) => {
    console.log("moduleA executed!");
    module.exports = {msg : "Hello from A"};
}

const moduleB = (module, exports) => {
    console.log("moduleB executed!");
    module.exports = {msg : "Hello from B"};
}

const moduleC = (module, exports) => {
    console.log("moduleC executed!");
    module.exports = {msg: "Hello from C"};
}

const a1 = myRequire('./a', moduleA);
const a2 = myRequire('./a', moduleA);

const b1 = myRequire('./b', moduleB);

delete myCache['./b'];

const b2 = myRequire('./b', moduleB);

console.log("Results: ", a1, a2, b1, b2);