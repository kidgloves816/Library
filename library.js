let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    return book;
}

const container = document.getElementsByClassName('container')
function createBookCard(title, author, pages, read) {
    const bookDisplay = document.createTextNode('book')
    const book = addBookToLibrary();
    container.appendChild(bookDisplay);
}