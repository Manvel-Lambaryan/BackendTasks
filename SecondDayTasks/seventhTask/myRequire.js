const fs = require("node:fs");
const path = require("node:path");

const myRequire = (modulePath) => {
    const absPath = path.resolve(modulePath);
    const code = fs.readFileSync(absPath, "utf8");

    const module = {exports : {}};
    const exports = module.exports;

    const wrapper = new Function("exports", "module", "myRequire", code);

    wrapper(exports, module, myRequire);

    return module.exports;
}

module.exports = myRequire;