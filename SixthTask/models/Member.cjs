class Member {
  constructor(name, memberId, borrowedBooks = []) {
    this.name = name;
    this.memberId = memberId;
    this.borrowedBooks = borrowedBooks;
  }

  borrowBook(book) {
    if (this.borrowedBooks.includes(book)) {
      return `${this.name} already borrowed '${book.title}'.`;
    }

    book.borrow();
    this.borrowedBooks.push(book);

    return `${this.name} borrowed '${book.title}'.`;
  }

  returnBook(book) {
    const index = this.borrowedBooks.indexOf(book);

    if (index === -1) {
      return `${this.name} does not have '${book.title}'.`;
    }

    book.returnBook();
    this.borrowedBooks.splice(index, 1);

    return `${this.name} returned '${book.title}'.`;
  }
}

module.exports = Member;
