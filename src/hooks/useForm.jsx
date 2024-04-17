import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { bookContext } from '../contexts/bookContext';
const initialForm = {
  title: '',
  description: '',
  pages: '',
  publication_date: '',
  image_url: '',
  extract: '',
};
const useForm = (dataToEdit, handleCloseModal) => {
  const { state, createBook, updateBook, deleteBookContext } =
    useContext(bookContext);
  const [form, setForm] = useState(initialForm);
  const deleteBook = (id) => {
    const confirmation = confirm(
      'Estas seguro que quieres eliminar el libro seleccionado ? ',
    );
    if (confirmation) deleteBookContext(id);
  };
  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    }
  }, [dataToEdit]);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isEmptyField = Object.values(form).every((value) => value !== '');
    if (!isEmptyField) return alert('complete all fields');
    const exist = state.some((book) => book.id === form.id);
    if (exist) {
      updateBook(form);
    } else {
      createBook(form);
    }
    setForm(initialForm);
    if (dataToEdit) handleCloseModal();
  };
  return {
    form,
    deleteBook,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
