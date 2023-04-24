const books = [
    {
        bookId: 0,
        title: 'Rich dad Poor dad',
        author: 'Robert T. Kiyosaki',
    },
    {
        bookId: 1,
        title: 'Harry Potter',
        author: 'J. K. Rowling',
    },
];

function addBook(i, bookTitle, bookAuthor) {
    const newBook = {
        bookId: i,
        title: bookTitle,
        author: bookAuthor,
    };
    books.push(newBook);
}

function removeBook (bookTitle) {
    const result = books.filter(book => book.title != bookTitle);
    return result;
};
