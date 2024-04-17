import { Router } from 'express';

import {
  deleteBookController,
  getAllBooksController,
  getBookForIdController,
  postBookController,
  updateBookController,
} from '../controllers/bookControllers.js';
export const booksRouter = Router();

booksRouter.get('/', getAllBooksController);

booksRouter.get('/:id', getBookForIdController);

booksRouter.post('/', postBookController);

booksRouter.patch('/:id', updateBookController);

booksRouter.delete('/:id', deleteBookController);
