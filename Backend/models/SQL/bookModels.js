import { randomUUID } from 'node:crypto';

import mysql from 'mysql2/promise.js';

const config = {
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: '',
  database: 'books',
};

const connection = await mysql.createConnection(config);

export const getAllBooksModel = async () => {
  try {
    const [getBooks] = await connection.query('Select * from books');
    return getBooks;
  } catch (error) {
    console.log(error);
  }
};
export const getBookForIdModel = async ({ id }) => {
  try {
    const [bookForId] = await connection.query(
      'Select * from books where id = ? ',
      [id],
    );
    return bookForId;
  } catch (error) {
    console.log(error);
  }
};
export const createBookModel = async ({ input }) => {
  const { title, description, pages, image_url, publication_date, extract } =
    input;
  const RequestSql = `INSERT INTO books (id, title, description, pages, image_url, publication_date, extract) 
               VALUES (?, ?, ?, ?, ?, ?, ?)`;
  const id = randomUUID();

  const values = [
    id,
    title,
    description,
    pages,
    image_url,
    publication_date,
    extract,
  ];
  const newBook = {
    id,
    title,
    description,
    pages,
    image_url,
    publication_date,
    extract,
  };
  try {
    await connection.query(RequestSql, values);
    return newBook;
  } catch (error) {
    console.log(error);
  }
};

export const updateBookModel = async ({ id, data }) => {
  const [bookToEdit] = await connection.query(
    'select * from books where id = ?',
    [id],
  );

  const bookEdited = { ...bookToEdit[0], ...data };
  const { title, description, pages, image_url, publication_date, extract } =
    bookEdited;
  const updateQuery = `
  UPDATE books
  SET
    title = ?,
    description = ?,
    pages = ?,
    image_url = ?,
    publication_date = ?,
    extract = ?
  WHERE id = ?
`;
  await connection.query(updateQuery, [
    title,
    description,
    pages,
    image_url,
    publication_date,
    extract,
    id,
  ]);
  return bookEdited;
};

export const deleteBookModel = async ({ id }) => {
  try {
    const [bookToDelete] = await connection.query(
      'delete from books where id = ?',
      [id],
    );

    const removed = bookToDelete.affectedRows;
    if (removed === 0) return false;
    return true;
  } catch (error) {
    return false;
  }
};
