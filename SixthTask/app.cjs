const Book = require("./models/Book.cjs");
const Member = require("./models/Member.cjs");
const library = require("./services/libraryService.cjs");

const b1 = new Book("Harry Potter", "J.K. Rowling", 1997);
const b2 = new Book("LOTR", "Tolkien", 1954);
const b3 = new Book("The Hobbit", "Tolkien", 1937);

const m1 = new Member("Manvel", 101);
const m2 = new Member("Narek", 102);

console.log(library.addBook(b1));
console.log(library.addBook(b2));
console.log(library.addBook(b3));

console.log(library.addMember(m1));
console.log(library.addMember(m2));

console.log(library.borrow("Harry Potter", 101));
console.log(library.borrow("Harry Potter", 102));
console.log(library.borrow("LOTR", 102));
console.log(library.return("Harry Potter", 101));
console.log(library.borrow("Harry Potter", 102));
