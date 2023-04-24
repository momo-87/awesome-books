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

const article = [];
const bookList = document.querySelector('.bookList');

for( let i = 0; i < books.length; i += 1) {
    article[i] = document.createElement('article');
    bookList.appendChild(article[i]);
    article[i].innerHTML = `
        <span>"${books[i].title}"</span>by 
        <span>${books[i].author}</span>
        <button type="button" id="${books[i].bookId}">Remove</button>
    `;
}
