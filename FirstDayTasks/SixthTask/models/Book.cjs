class Book {
  constructor(title, author, year, isBorrowed) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.isBorrowed = isBorrowed;
  }

  borrow() {
    return this.isBorrowed ? `${this.title} Borrowd` : false;
  }

  returnBook() {
    return `Title:${this.title}\n Author:${this.author}\n Year:${
      this.year
    }\n isBoorowed: ${this.borrow()}`;
  }
}

module.exports = Book;
