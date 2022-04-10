CREATE TABLE book(
Id SERIAL PRIMARY KEY,
book_name VARCHAR(20) not null,
genre VARCHAR(20) not null,
author VARCHAR(20) not null,
year integer not null
);

create table client(
Id SERIAL PRIMARY KEY,
firstname VARCHAR(20) not null,
surname VARCHAR(20) not null,
birthDate date not null
);

create table taken(
Id SERIAL PRIMARY KEY,
clientName VARCHAR(20) not null,
clientSurname VARCHAR(20) not null,
bookName VARCHAR(20) not null
);
