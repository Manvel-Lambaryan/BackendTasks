const { User, validateUser } = require("./userService.cjs");

const firstUser = new User("Manvel", "student");

console.log(validateUser(firstUser));
