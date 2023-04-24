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
const a = addBook(2, 'OK','NAME');

console.log(books);