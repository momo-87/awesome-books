// the book object
const book = {
  id: "",
  title: "",
  author: "",
};

// Add a new book function
function addBook(title, author) {
  const newBook = Object.create(book);

  // Create a unique ID
  newBook.id = Date.now().toString();

  newBook.title = title;
  newBook.author = author;
  booksList.push(newBook);
}

// Remove an existing book function
function removeBook(id) {
  booksList = booksList.filter((obj) => obj.id !== id);
}

// Save books to local storage
function storeBooks(books) {
  localStorage.setItem("books", JSON.stringify(books));
}

// Check local storage for books list object
let booksList = JSON.parse(localStorage.getItem("books")) || [];

// Show books
function showBooks() {
  // Remove all existing book elements from the container
  const container = document.querySelector(".books");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  // Update books
  booksList.forEach((book) => {
    // Create the container div
    const bookInfo = document.createElement("div");
    bookInfo.className = "book-info";

    // Create and append title of the book
    const title = document.createElement("p");
    title.className = "book-title";
    title.innerHTML = book.title;
    bookInfo.appendChild(title);

    // Create and append author of the book
    const author = document.createElement("p");
    author.className = "book-author";
    author.innerHTML = book.author;
    bookInfo.appendChild(author);

    // Create and append the button
    const button = document.createElement("button");
    button.className = "remove-book";
    button.type = "button";
    button.textContent = "Remove";
    button.dataset.id = book.id; // Set the book ID as a data attribute
    bookInfo.appendChild(button);

    // Create and append the hr element
    const hr = document.createElement("hr");
    bookInfo.appendChild(hr);

    // Append the container div to the html
    container.appendChild(bookInfo);
  });

  // Update local storage
  storeBooks(booksList);


  // Checking all the remove-book buttons
  const removeButtons = document.querySelectorAll(".remove-book");
  removeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const { id } = event.target.dataset;
      removeBook(id);
      showBooks();
    });
  });
}

  showBooks();

// Adding new book
const addBookBtn = document.querySelector("#add-book");
addBookBtn.addEventListener("click", () => {
  const title = document.querySelector("#new-title").value;
  const author = document.querySelector("#new-author").value;
  addBook(title, author);
  showBooks();
});
