import express from 'express';
import cors from 'cors';
import { Library } from './library.js';

const library = new Library();
const app = express();

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('Server works')
})

app.post('/addBook', async (req, res) => {
    const { book_name, genre, author, year } = req.body;
    library.add_to_library(book_name, genre, author, year);
    res.send('Book has been added');
});

app.post('/addClient', async (req, res) => {
    const { firstname, surname, birthDate } = req.body;
    library.add_client(firstname, surname, birthDate);
    res.send('Client has been added');
});

app.post('/takeBook', async (req, res) => {
    const { client_name, client_surname, book_name } = req.body;
    library.add_to_taken(client_name, client_surname, book_name);
    res.send('Book has been taken');
});

app.post('/returnBook', async (req, res) => {
    const { book } = req.body;
    library.delete_from_taken(book);
    res.send('Book has been returned');
});

app.post('/deleteBook', async (req, res) => {
    const { book } = req.body;
    library.delete_from_library(book);
    res.send('Book has been deleted');
});

app.post('/deleteClient', async (req, res) => {
    const { customer } = req.body;
    library.delete_client(customer);
    res.send('Client has been deleted');
});

app.listen(20202, () => console.log('Server works'));
