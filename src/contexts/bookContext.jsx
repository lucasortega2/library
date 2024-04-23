import { createContext, useEffect, useReducer, useState } from 'react';
import { helphttp } from '../helpers/helphttp';
import useSnackBar from '../hooks/useSnackBar';

export const bookContext = createContext();
const PORT = import.meta.env.VITE_BACKEND_PORT || 5000;
const url = `https://backend-library-2j6c.onrender.com/books`;
const http = helphttp();

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_BOOKS':
      return action.payload;
    case 'CREATE_BOOK':
      return [...state, action.payload];
    case 'UPDATE_BOOK':
      return state.map((book) =>
        book._id === action.payload._id ? { ...book, ...action.payload } : book,
      );
    case 'DELETE_BOOK':
      return state.filter((book) => book._id !== action.payload);
    default:
      return state;
  }
};

export const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  const [filter, setFilter] = useState('');
  const {
    openSnackbar,
    handleOpenSnackBar,
    handleCloseSnackbar,
    action,
    error,
  } = useSnackBar();

  useEffect(() => {
    const getAllBooks = async () => {
      const response = await fetch(url);
      try {
        const response = await fetch(url);
        console.log(response);
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const responseData = await response.json();
        dispatch({ type: 'SET_BOOKS', payload: responseData });
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    getAllBooks();
  }, []);

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

  const updateBook = async (bookToEdit) => {
    const id = bookToEdit._id;
    bookToEdit.pages = parseInt(bookToEdit.pages);
    try {
      await http.patch(`${url}/${id}`, { body: bookToEdit });
      handleOpenSnackBar('upload');
      return dispatch({
        type: 'UPDATE_BOOK',
        payload: bookToEdit,
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

export default BookProvider;
