const books = [
    {
        title: 'Rich dad Poor dad',
        author: 'Robert T. Kiyosaki',
    },
    {
        title: 'Harry Potter',
        author: 'J. K. Rowling',
    },
];
// Add book function
function addBook(bookTitle, bookAuthor) {
    const newBook = {
        title: bookTitle,
        author: bookAuthor,
    };
    books.push(newBook);
}
// remove book function
function removeBook (bookTitle) {
    const result = books.filter(book => book.title != bookTitle);
    return result;
};

// Adding book to the collection by cliking on Add button
const addButton = document.querySelector('#addBook');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');

addButton.addEventListener('click', addBook(titleInput.value, authorInput.value));


// Dynamically display books from books object
const article = [];
const bookList = document.querySelector('.bookList');

for( let i = 0; i < books.length; i += 1) {
    article[i] = document.createElement('article');
    bookList.appendChild(article[i]);
    article[i].innerHTML = `
        <span>"${books[i].title}"</span>by 
        <span>${books[i].author}</span>
        <button type="button" id="${books[i].title}">Remove</button>
    `;
}




