'use strict';

import pkg from 'pg';

const { Pool } = pkg;
const config = {
    user: 'postgres',
    host: 'localhost',
    database: 'library',
    password: 'root',
    port: 5432,
};

const client = new Pool(config);
client.connect(function (err) {
    if (err) throw err;
    console.log('Connected!');
});

export class Library {
    add_to_library(book_name, genre, author, year) {
        client.query(
            `INSERT INTO book(book_name, genre, author, year) values('${book_name}', '${genre}', '${author}', '${year}')`,
            (err, res) => {}
        );
    }

    delete_from_library(book) {
        client.query(`DELETE FROM book WHERE book_name = '${book}'`, (err, res) =>
        {});
    }

    add_client(firstname, surname, birthDate) {
        client.query(
            `INSERT INTO customer(firstname, surname, birthDate) values('${firstname}', '${surname}', '${birthDate}')`,
            (err, res) => {}
        );
    }

    delete_client(customer) {
        client.query(`DELETE FROM customer WHERE firstname = '${customer}'`, (err, res) =>
        {});
    }

    add_to_taken(client_name, client_surname, book_name) {
        client.query(
            `INSERT INTO taken(client_name, client_surname, book_name) values('${client_name}', '${client_surname}', '${book_name}')`,
            (err, res) => {}
        );
    }

    delete_from_taken(book) {
        client.query(`DELETE FROM taken WHERE book_name = '${book}'`, (err, res) =>
        {});
    }
}

