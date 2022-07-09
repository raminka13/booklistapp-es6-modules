// import Book from './Book.js';
import Storage from './Storage.js';
import AddDate from './date.js';
// UI class: Display books
export default class UI {
  static displayBooks() {
    AddDate.addDate();
    const books = Storage.getBooks();

    books.forEach((book) => UI.addbooktoList(book));
  }

  static addbooktoList(book) {
    const list = document.querySelector('#book-list');

    const bookInfo = document.createElement('div');
    bookInfo.className = 'book';

    const btitle = document.createElement('h3');
    btitle.textContent = book.title;
    bookInfo.appendChild(btitle);

    const author = document.createElement('h3');
    author.textContent = ` by ${book.author} `;
    bookInfo.appendChild(author);

    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = 'Remove';
    bookInfo.appendChild(removeBtn);
    list.appendChild(bookInfo);
  }

  static deleteBook(el) {
    if (el.classList.contains('remove-btn')) {
      el.parentElement.remove();
    }
  }

  static clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }

  static showAlert(message, className) {
    const add = document.createElement('div');
    const remove = document.createElement('div');
    add.className = `alert alert-${className}`;
    add.appendChild(document.createTextNode(message));
    remove.className = `alert alert-${className}`;
    remove.appendChild(document.createTextNode(message));
    const contAdd = document.getElementById('add');
    const contRem = document.getElementById('list');
    const bookForm = document.getElementById('book-form');
    const bookList = document.getElementById('book-list');
    contAdd.insertBefore(add, bookForm);
    contRem.insertBefore(remove, bookList);

    const alerts = Array.from(document.querySelectorAll('.alert'));
    alerts.forEach((alert) => setTimeout(() => alert.remove(), 1000));
  }
}
