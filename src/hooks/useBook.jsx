import { useState, useEffect, useContext } from 'react';
import { helphttp } from '../helpers/helphttp';
import { bookContext } from '../contexts/bookContext';
import useLoader from '../hooks/useLoader';
const useBook = (id) => {
  const { url } = useContext(bookContext);
  const [book, setBook] = useState(null);
  const http = helphttp();
  const { isLoading, handleChangeLoading } = useLoader();

  useEffect(() => {
    const getBook = async () => {
      handleChangeLoading(true);
      try {
        const response = await http.get(`${url}/${id}`);
        setBook(response);
      } catch (error) {
        console.error('Error fetching book details:', error);
      } finally {
        handleChangeLoading(false);
      }
    };
    getBook();
  }, [id]);

  return { book, isLoading };
};

export default useBook;
