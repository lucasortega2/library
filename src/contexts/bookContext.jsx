import { createContext, useEffect, useReducer, useState } from 'react';
import { helphttp } from '../helpers/helphttp';
import useSnackBar from '../hooks/useSnackBar';
import useLoader from '../hooks/useLoader';
export const bookContext = createContext();
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
  const { isLoading, handleChangeLoading } = useLoader();
  const {
    openSnackbar,
    handleOpenSnackBar,
    handleCloseSnackbar,
    action,
    error,
  } = useSnackBar();

  useEffect(() => {
    handleChangeLoading(true);
    const getAllBooks = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const responseData = await response.json();
        dispatch({ type: 'SET_BOOKS', payload: responseData });
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        handleChangeLoading(false);
      }
    };
    getAllBooks();
  }, []);

  const createBook = async (formData) => {
    handleChangeLoading(true);
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
    } finally {
      handleChangeLoading(false);
    }
  };

  const updateBook = async (bookToEdit) => {
    handleChangeLoading(true);

    const id = bookToEdit._id;
    bookToEdit.pages = parseInt(bookToEdit.pages);
    try {
      console.log('hla');
      const result = await http.patch(`${url}/${id}`, { body: bookToEdit });
      console.log(result);
      handleOpenSnackBar('upload');
      return dispatch({
        type: 'UPDATE_BOOK',
        payload: bookToEdit,
      });
    } catch (error) {
      console.error(error.message);
    } finally {
      handleChangeLoading(false);
    }
  };

  const deleteBookContext = async (id) => {
    handleChangeLoading(true);

    try {
      await http.del(`${url}/${id}`);
      handleOpenSnackBar('delete');
    } catch (error) {
      alert(error);
    } finally {
      handleChangeLoading(false);
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
        isLoading,
      }}
    >
      {children}
    </bookContext.Provider>
  );
};

export default BookProvider;
