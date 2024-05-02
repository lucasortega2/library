import {
  createBookModel,
  deleteBookModel,
  getAllBooksModel,
  getBookForIdModel,
  updateBookModel,
} from '../models/NOSQL/bookModels.js';

import {
  validatePartialSchema,
  validationSchema,
} from '../validations/booksValidations.js';

export const getAllBooksController = async (req, res) => {
  const books = await getAllBooksModel();
  res.json(books);
};

export const getBookForIdController = async (req, res) => {
  const { id } = req.params;
  const book = await getBookForIdModel({ id });

  res.json(book);
};

export const postBookController = async (req, res) => {
  const book = validationSchema(req.body);

  if (!book.success) return res.json(book);

  const newBook = await createBookModel({ input: book.data });
  res.json(newBook);
};

export const updateBookController = async (req, res) => {
  const book = validatePartialSchema(req.body);

  if (!book.success) {
    const result = book.error.issues[0].message;
    return res.status(400).json({ message: result });
  }
  const { id } = req.params;
  const updateBook = await updateBookModel({ id, data: book.data });
  if (updateBook === false)
    return res.status(404).json({ message: 'book not found' });
  res.json(updateBook);
};

export const deleteBookController = async (req, res) => {
  const { id } = req.params;
  const bookToDelete = await deleteBookModel({ id });
  if (!bookToDelete || bookToDelete === undefined) {
    return res.status(404).json({ message: 'Book not found' });
  }
  res.json({ message: 'Book deleted' });
};
