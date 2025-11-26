class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }
}

function validateUser(user) {
  return `Name : ${user.name}, Role : ${user.role}`;
}

const ROLES = ["student", "admin"];

module.exports = { User, validateUser, ROLES };
