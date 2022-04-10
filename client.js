'use strict';

const addBook = () => {
    document.getElementsByClassName('addBook')[0].style.display = 'block';
    document.getElementsByClassName('menu')[0].style.display = 'none';
    const addBookButton = document.getElementById('addBookButton');
    addBookButton.addEventListener('click', async () => {
        const book_name = document.getElementById('bookName').value;
        const author = document.getElementById('bookAuthor').value;
        const year = document.getElementById('year').value;
        const genre = document.getElementById('bookGenre').value;
        await fetch('http://localhost:20202/addBook', {
            method: 'POST',
            body: JSON.stringify({ book_name, genre, author, year
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        document.getElementsByClassName('addBook')[0].style.display = 'none';
        document.getElementsByClassName('menu')[0].style.display = 'inline-block';
    });
};

const addClient = () => {
    document.getElementsByClassName('addClient')[0].style.display = 'block';
    document.getElementsByClassName('menu')[0].style.display = 'none';
    const registerClientButton = document.getElementById('addClientButton');
    registerClientButton.addEventListener('click', async () => {
        const firstname = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const birthDate = document.getElementById('birthDate').value;
        await fetch('http://localhost:20202/addClient', {
            method: 'POST',
            body: JSON.stringify({ firstname, surname, birthDate
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        document.getElementsByClassName('addClient')[0].style.display = 'none';
        document.getElementsByClassName('menu')[0].style.display = 'inline-block';
    });
};

const takeBook = () => {
    document.getElementsByClassName('takeBook')[0].style.display = 'block';
    document.getElementsByClassName('menu')[0].style.display = 'none';
    const takeBookButton = document.getElementById('takeBookButton');
    takeBookButton.addEventListener('click', async () => {
        const client_name = document.getElementById('clientName').value;
        const client_surname = document.getElementById('clientSurname').value;
        const book_name = document.getElementById('bookNameTake').value;
        await fetch('http://localhost:20202/takeBook', {
            method: 'POST',
            body: JSON.stringify({client_name, client_surname, book_name,
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        document.getElementsByClassName('takeBook')[0].style.display = 'none';
        document.getElementsByClassName('menu')[0].style.display = 'inline-block';
    });
};

const returnBook = () => {
    document.getElementsByClassName('returnBook')[0].style.display = 'block';
    document.getElementsByClassName('menu')[0].style.display = 'none';
    const returnBookButton = document.getElementById('returnBookButton');
    returnBookButton.addEventListener('click', async () => {
        const book = document.getElementById('bookNameReturn').value;
        await fetch('http://localhost:20202/returnBook', {
            method: 'POST',
            body: JSON.stringify({
                book,
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        document.getElementsByClassName('returnBook')[0].style.display = 'none';
        document.getElementsByClassName('menu')[0].style.display = 'inline-block';
    });
};

const deleteClient = () => {
    document.getElementsByClassName('deleteClient')[0].style.display = 'block';
    document.getElementsByClassName('menu')[0].style.display = 'none';
    const deleteClientButton = document.getElementById('deleteClientButton');
    deleteClientButton.addEventListener('click', async () => {
        const customer = document.getElementById('clientNameDelete').value;
        await fetch('http://localhost:20202/deleteClient', {
            method: 'POST',
            body: JSON.stringify({
                customer,
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        document.getElementsByClassName('deleteClient')[0].style.display = 'none';
        document.getElementsByClassName('menu')[0].style.display = 'inline-block';
    });
};

const deleteBook = () => {
    document.getElementsByClassName('deleteBook')[0].style.display = 'block';
    document.getElementsByClassName('menu')[0].style.display = 'none';
    const deleteBookButton = document.getElementById('deleteBookButton');
    deleteBookButton.addEventListener('click', async () => {
        const book = document.getElementById('bookNameDelete').value;
        await fetch('http://localhost:20202/deleteBook', {
            method: 'POST',
            body: JSON.stringify({
                book,
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        document.getElementsByClassName('deleteBook')[0].style.display = 'none';
        document.getElementsByClassName('menu')[0].style.display = 'inline-block';
    });
};
