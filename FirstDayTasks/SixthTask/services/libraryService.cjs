let books = [];
let members = [];

const addBook = (book) => {
  books.push(book);
  return `${book.title} added to library.`;
};

const addMember = (member) => {
  members.push(member);
  return `${member.name} added as member.`;
};

const findBook = (title) => {
  for (let i = 0; i < books.length; i++) {
    if (books[i].title.toLowerCase() === title.toLowerCase()) {
      return books[i];
    }
  }
  return undefined;
};

const findMember = (id) => {
  for (let i = 0; i < members.length; i++) {
    if (members[i].memberId === id) {
      return members[i];
    }
  }
  return undefined;
};

const borrow = (title, memberId) => {
  const book = findBook(title);
  const member = findMember(memberId);

  if (!book) return `Book '${title}' not found.`;
  if (!member) return `Member with ID ${memberId} not found.`;

  const msg = book.borrow();

  if (book.isBorrowed) {
    member.borrowedBooks.push(book);
  }

  return msg;
};

const returnBook = (title, memberId) => {
  const book = findBook(title);
  const member = findMember(memberId);

  if (!book) return `Book '${title}' not found.`;
  if (!member) return `Member with ID ${memberId} not found.`;

  let index = -1;
  for (let i = 0; i < member.borrowedBooks.length; i++) {
    if (member.borrowedBooks[i] === book) {
      index = i;
      break;
    }
  }

  if (index === -1) return `${member.name} does not have '${title}'.`;

  const msg = book.returnBook();
  member.borrowedBooks.splice(index, 1);
  return msg;
};

module.exports = {
  addBook,
  addMember,
  findBook,
  findMember,
  borrow,
  return: returnBook,
};
