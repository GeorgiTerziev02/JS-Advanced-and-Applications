import { fetchData } from './fetch.js';

const htmlElements = {
    $submitBtn: () => document.getElementById('submit'),
    $title: () => document.getElementById('title'),
    $author: () => document.getElementById('author'),
    $isbn: () => document.getElementById('isbn'),
    $tbody: () => document.getElementsByTagName('tbody')[0],
    $load: () => document.getElementById('loadBooks')
};


htmlElements.$submitBtn().addEventListener('click', createBook);
htmlElements.$load().addEventListener('click', load);

function createBook(e) {
    e.preventDefault();

    const book = {
        title: htmlElements.$title().value,
        author: htmlElements.$author().value,
        isbn: htmlElements.$isbn().value
    };

    fetchData.create(book).then(obj => {
        const tr = createBookTr(obj.name, book);
        htmlElements.$tbody().appendChild(tr);
    });
}

function load(e) {
    htmlElements.$tbody().innerHTML = '';
    fetchData
        .listAll()
        .then(obj => {
            Object.entries(obj).forEach(([id, book]) => {
                const tr = createBookTr(id, book);
                htmlElements.$tbody().appendChild(tr);
            })
        });
}

function updateBook(e) {
    const id = this.parentNode.parentNode.id;
    let book = document.getElementById(id);

    const title = book.children[0].innerText;
    const author = book.children[1].innerText;
    const isbn = book.children[2].innerText;

    htmlElements.$title().value = title;
    htmlElements.$author().value = author;
    htmlElements.$isbn().value = isbn;

    htmlElements.$submitBtn().removeEventListener('click', createBook);
    htmlElements.$submitBtn().addEventListener('click', edit);

}

function edit(e, id){
    console.log(arguments[0]);
    const book = {
            title: htmlElements.$title().value,
            author: htmlElements.$author().value,
            isbn: htmlElements.$isbn().value
        };
    fetchData.update(arguments[0], book);
    htmlElements.$submitBtn().removeEventListener('click', edit);
    htmlElements.$submitBtn().addEventListener('click', createBook);
}

function deleteBook(e) {
    const id = this.parentNode.parentNode.id;
    fetchData.delete(id);
    document.getElementById(id).remove();

}

function createHtmlElement(tag, content) {
    let el = document.createElement(tag);

    if (content) {
        el.textContent = content;
    }

    return el;
}

function createBookTr(id, book) {
    const tr = createHtmlElement('tr');
    const titleTd = createHtmlElement('td', book.title);
    const authorTd = createHtmlElement('td', book.author);
    const isbnTd = createHtmlElement('td', book.isbn);
    const buttonsTd = createHtmlElement('td');

    const updateButton = createHtmlElement('button', 'Edit');
    const deleteButton = createHtmlElement('button', 'Delete');

    updateButton.addEventListener('click', updateBook);
    deleteButton.addEventListener('click', deleteBook);

    buttonsTd.append(updateButton, deleteButton);

    tr.id = id;
    tr.append(titleTd, authorTd, isbnTd, buttonsTd);

    return tr;
}