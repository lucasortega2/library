import { useState, useEffect, useContext } from 'react';
import { helphttp } from '../helpers/helphttp';
import { bookContext } from '../contexts/bookContext';
const useBook = (id) => {
  const { url } = useContext(bookContext);
  const [book, setBook] = useState(null);
  const http = helphttp();
  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await http.get(`${url}/${id}`);
        setBook(response[0]);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };
    getBook();
  }, [id]);

  return book;
};

export default useBook;
