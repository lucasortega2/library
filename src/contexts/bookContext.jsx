import { createContext, useEffect, useReducer, useState } from 'react';
import { helphttp } from '../helpers/helphttp';
import useSnackBar from '../hooks/useSnackBar';
export const bookContext = createContext();
const PORT = import.meta.env.VITE_BACKEND_PORT || 5000;
const url = `http://localhost:${PORT}/books`;
const http = helphttp();
const getAllBooks = async () => {
  const response = await fetch(url);
  const responseData = await response.json();
  return responseData;
};
const initialBooks = await getAllBooks();

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_BOOK': {
      return [...state, action.payload];
    }
    case 'UPDATE_BOOK': {
      const updatedState = state.map((book) => {
        if (book.id === action.payload.id) {
          return { ...book, ...action.payload };
        } else {
          return book;
        }
      });
      return updatedState;
    }

    case 'DELETE_BOOK': {
      const newBooks = state.filter((book) => book.id !== action.payload);
      return newBooks;
    }
  }
};

export const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialBooks);
  const [filter, setFilter] = useState('');
  const {
    openSnackbar,
    handleOpenSnackBar,
    handleCloseSnackbar,
    action,
    error,
  } = useSnackBar();

  const createBook = async (formData) => {
    formData.pages = parseInt(formData.pages) || 'string';

    try {
      const newBook = await http.post(url, { body: formData });
      if (newBook.success === false) {
        const error = {
          input: newBook.error.issues[0].path[0],
          error: newBook.error.issues[0].message,
        };
        const message = `The field "${error.input}" has the following error: ${error.error}`;

        handleOpenSnackBar('error', message);
        return;
      }
      handleOpenSnackBar('create');
      return dispatch({
        type: 'CREATE_BOOK',
        payload: newBook,
      });
    } catch (error) {
      alert(error);
    }
  };
  const updateBook = async (book) => {
    const { id } = book;
    book.pages = parseInt(book.pages);
    try {
      const uptadedBook = await http.patch(`${url}/${id}`, { body: book });
      handleOpenSnackBar('upload');
      return dispatch({
        type: 'UPDATE_BOOK',
        payload: uptadedBook,
      });
    } catch (error) {
      alert(error);
    }
  };
  const deleteBookContext = async (id) => {
    try {
      await http.del(`${url}/${id}`);
      handleOpenSnackBar('delete');
    } catch (error) {
      alert(error);
    }
    return dispatch({
      type: 'DELETE_BOOK',
      payload: id,
    });
  };
  const filterBooks = (products) => {
    return products.filter((book) =>
      book.title.toLowerCase().includes(filter.toLowerCase()),
    );
  };
  const filteredBooks = filterBooks(state);
  const handleFilter = (input) => {
    setFilter(input);
  };

  return (
    <bookContext.Provider
      value={{
        state,
        filteredBooks,
        filter,
        handleFilter,
        createBook,
        updateBook,
        deleteBookContext,
        url,
        openSnackbar,
        handleCloseSnackbar,
        action,
        error,
      }}
    >
      {children}
    </bookContext.Provider>
  );
};
