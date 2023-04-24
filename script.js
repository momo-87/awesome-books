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
        author: bookAuthor
    };
    books.push(newBook);
}
// remove book function
function removeBook (bookTitle) {
    const result = books.filter(book => book.title != bookTitle);
    return result;
};


// Dynamically display books from books object
const bookList = document.querySelector('.bookList');
const article = [];
for( let i = 0; i < books.length; i += 1) {
    article[i] = document.createElement('article');
    bookList.appendChild(article[i]);
    article[i].innerHTML = `
        <span>"${books[i].title}"</span>by 
        <span>${books[i].author}</span>
        <button type="button" id="${books[i].title}">Remove</button>
    `;
};


// Adding book to the collection by cliking on Add button
const addButton = document.querySelector('#addBook');
const addBookForm = document.querySelector('#addBookForm');
let newBookTitle = '';
let newBookAuthor = '';

addBookForm.addEventListener('input', (event) => {
    if(event.target.classList.contains('title')) {
        newBookTitle = event.target.value;
    };
    if(event.target.classList.contains('author')) {
        newBookAuthor = event.target.value;
    }; 
});

addButton.addEventListener('click', () => {
    addBook(newBookTitle, newBookAuthor);
    newBook = document.createElement('article');
    newBook.innerHTML = `
                        <span>"${newBookTitle}"</span>by 
                        <span>${newBookAuthor}</span>
                        <button type="button" id="${newBookTitle}">Remove</button>
                        `;
    bookList.appendChild(newBook);
});

