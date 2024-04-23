import { useState, useEffect, useContext } from 'react';
import { helphttp } from '../helpers/helphttp';
import { bookContext } from '../contexts/bookContext';
const useBook = (id) => {
  const { url, handleChangeLoading } = useContext(bookContext);
  const [book, setBook] = useState(null);
  const http = helphttp();
  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await http.get(`${url}/${id}`);
        setBook(response);
      } catch (error) {
        console.error('Error fetching book details:', error);
      } finally {
        handleChangeLoading();
      }
    };
    getBook();
  }, [id]);

  return book;
};

export default useBook;
