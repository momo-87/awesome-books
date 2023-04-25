let books = [
  // {
  //     title: 'Rich dad Poor dad',
  //     author: 'Robert T. Kiyosaki',
  // },
  // {
  //     title: 'Harry Potter',
  //     author: 'J. K. Rowling',
  // },
];

// Add book function
function addBook(bookTitle, bookAuthor) {
  const newBook = {
    title: bookTitle,
    author: bookAuthor,
  };
  books.push(newBook);

  // Preserve data in local storage
  if (typeof (Storage) !== 'undefined') { // Check browser support for localStorage
    // Storing Data
    localStorage.setItem('storedBooks', JSON.stringify(books));
  }
}

// remove book function
function removeBook(bookTitle) {
  const result = books.filter((book) => book.title !== bookTitle);
  localStorage.setItem('storedBooks', JSON.stringify(result));
  return result;
}

// Dynamically display books from books object

// retrieved books from local storage
const retrievedData = localStorage.getItem('storedBooks');
books = JSON.parse(retrievedData);
const bookList = document.querySelector('.bookList');
const article = [];
for (let i = 0; i < books.length; i += 1) {
  article[i] = document.createElement('article');
  article[i].id = books[i].title.replaceAll(' ', '_'); // added line, id is use to target an article
  bookList.appendChild(article[i]);
  article[i].innerHTML = `
        <span>"${books[i].title}"</span> by 
        <span>${books[i].author}</span>
        <button type="button" id="${books[i].title.replaceAll(' ', '_')}" class ="removeButton">Remove</button>
    `;
}

// Adding book to the collection by cliking on Add button
const addButton = document.querySelector('#addBook');
const addBookForm = document.querySelector('#addBookForm');
let newBookTitle = '';
let newBookAuthor = '';

addBookForm.addEventListener('input', (event) => {
  if (event.target.classList.contains('title')) {
    newBookTitle = event.target.value;
  }
  if (event.target.classList.contains('author')) {
    newBookAuthor = event.target.value;
  }
});

let removeButtons = document.querySelectorAll('.removeButton');
addButton.addEventListener('click', () => {
  addBook(newBookTitle, newBookAuthor);
  const newBook = document.createElement('article');
  newBook.id = newBookTitle;
  newBook.innerHTML = `
                        <span>"${newBookTitle}"</span> by 
                        <span>${newBookAuthor}</span>
                        <button type="button" id="${newBookTitle.replaceAll(' ', '_')}" class ="removeButton">Remove</button>
                        `;
  bookList.appendChild(newBook);
  removeButtons = document.querySelectorAll('.removeButton');
});

// Removed Book by clicking on remove button
removeButtons.forEach((element) => {
  element.addEventListener('click', () => {
    books = removeBook(element.id.replaceAll('_', ' '));
    document.querySelector(`#${element.id}`).style.display = 'none';
  });
});
