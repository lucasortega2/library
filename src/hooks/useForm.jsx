import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { bookContext } from '../contexts/bookContext';
import validateForm from '../helpers/validateForm';
const useForm = (initialForm, dataToEdit, handleCloseModal) => {
  const { state, createBook, updateBook, deleteBookContext } =
    useContext(bookContext);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [blur, setBlur] = useState({});
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
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
    setBlur({ ...blur, [e.target.id]: true });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const exist = state.some((book) => book._id === form._id);
    const withoutError = Object.keys(errors).length === 0;
    if (withoutError) {
      if (exist) {
        updateBook(form);
      } else {
        createBook(form);
      }
      setBlur({});
      setForm(initialForm);
      if (dataToEdit) handleCloseModal();
    } else {
      alert('Error en el formulario, verifique nuevamente');
    }
  };
  return {
    form,
    deleteBook,
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    blur,
  };
};

export default useForm;
