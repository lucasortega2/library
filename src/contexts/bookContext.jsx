import { createContext, useReducer, useState } from 'react';
import generateId from '../helpers/generateId';
import { helphttp } from '../helpers/helphttp';
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
          const newId = generateId(action.payload.title);
          return { ...book, id: newId, ...action.payload };
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
  const createBook = async (formData) => {
    formData.pages = parseInt(formData.pages);
    formData.id = generateId(formData.title);
    try {
      await http.post(url, { body: formData });
      return dispatch({
        type: 'CREATE_BOOK',
        payload: formData,
      });
    } catch (error) {
      alert(error);
    }
  };
  const updateBook = async (book) => {
    const { id } = book;
    book.pages = parseInt(book.pages);
    try {
      const response = await http.patch(`${url}/${id}`, { body: book });
      console.log(response);
      return dispatch({
        type: 'UPDATE_BOOK',
        payload: response,
      });
    } catch (error) {
      alert(error);
    }
  };
  const deleteBookContext = async (id) => {
    try {
      await http.del(`${url}/${id}`);
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
      }}
    >
      {children}
    </bookContext.Provider>
  );
};
