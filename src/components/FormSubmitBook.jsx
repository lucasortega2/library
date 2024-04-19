import { TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import SnackBar from '../components/SnackBar';
import useForm from '../hooks/useForm';
import ButtonsForm from './ButtonsForm';
import { useContext } from 'react';
import { bookContext } from '../contexts/bookContext';

const FormSubmitBook = ({ dataToEdit, isEdit, handleCloseModal }) => {
  const { openSnackbar, handleCloseSnackbar, action, error } =
    useContext(bookContext);
  const initialForm = {
    title: '',
    description: '',
    pages: '',
    publication_date: '',
    image_url: '',
    extract: '',
  };

  const validateForm = (form) => {
    let errors = {};

    for (let key in form) {
      let isEmpty = '';
      if (!form[key]) {
        errors[key] = `El campo ${key} está vacio`;
        isEmpty = true;
      } else {
        isEmpty = false;
      }
      switch (key) {
        case 'title':
          if (form[key].length < 3 && !isEmpty) {
            errors[key] = 'El campo tiene menos de 3 carácteres';
          }
          if (form[key].length >= 30 && !isEmpty) {
            errors[key] = 'El campo tiene más de 30 carácteres';
          }
          break;
        case 'description':
          if (form[key].length < 10 && !isEmpty) {
            errors[key] = 'El campo tiene menos de 10 carácteres';
          }

          if (form[key].length >= 30 && !isEmpty) {
            errors[key] = 'El campo tiene más de 800 carácteres';
          }
          break;
        case 'pages':
          const input = form[key];
          const isNumber = parseInt(input);
          if (!isNumber && !isEmpty) {
            errors[key] = 'El valor debe ser un número';
            if (input <= 0) {
              errors[key] = 'Lás paginas no pueden ser 0 o negativas   ';
            }
            if (input > 6000) {
              errors[key] = 'Las páginas no pueden ser mayor a 6000';
            }
          }

          break;
        case 'publication_date':
          if (form[key].length > 4 && !isEmpty) {
            errors[key] = 'El campo tiene más de 4 carácteres';
          }
          break;
        case 'image_url':
          if (form[key].length > 120 && !isEmpty) {
            errors[key] = 'El campo tiene más de 120 carácteres';
          }
          break;
        case 'extract':
          if (form[key].length > 150 && !isEmpty) {
            errors[key] = 'El campo tiene más de 150 carácteres';
          }

          break;
      }
    }

    return errors;
  };

  const { form, handleChange, handleSubmit, handleBlur, errors, blur } =
    useForm(initialForm, validateForm, dataToEdit, handleCloseModal);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      margin="0 auto"
      display="inline-flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      height="80vh"
      width="50vw"
      minWidth="300px"
      minHeight="800px"
    >
      <SnackBar
        open={openSnackbar}
        handleCloseSnackbar={handleCloseSnackbar}
        action={action}
        error={error}
      />
      <Typography variant={isEdit ? 'h6' : 'h4'} align="center">
        {isEdit ? 'Edit your book' : 'Complete your book'}
      </Typography>
      <TextField
        size={isEdit ? 'small' : 'medium'}
        id="title"
        label="Title"
        fullWidth
        autoComplete="off"
        name="title"
        onChange={handleChange}
        value={form.title}
        required
        onBlur={(e) => handleBlur(e)}
        helperText={
          errors.title && Object.keys(blur).includes('title') && errors.title
        }
        error={errors.title && Object.keys(blur).includes('title') && true}
      />
      <TextField
        size={isEdit ? 'small' : 'medium'}
        id="description"
        label="Description"
        multiline
        rows="3"
        autoComplete="off"
        fullWidth
        name="description"
        onChange={handleChange}
        value={form.description}
        required
        onBlur={(e) => handleBlur(e)}
        helperText={
          errors.description &&
          Object.keys(blur).includes('description') &&
          errors.description
        }
        error={
          errors.description &&
          Object.keys(blur).includes('description') &&
          true
        }
      />

      <TextField
        id="pages"
        label="Pages"
        fullWidth
        multiline
        autoComplete="off"
        name="pages"
        onChange={handleChange}
        value={form.pages}
        required
        onBlur={(e) => handleBlur(e)}
        helperText={
          errors.pages && Object.keys(blur).includes('pages') && errors.pages
        }
        error={errors.pages && Object.keys(blur).includes('pages') && true}
      />

      <TextField
        id="publication_date"
        label="Publication date"
        fullWidth
        autoComplete="off"
        name="publication_date"
        onChange={handleChange}
        value={form.publication_date}
        required
        onBlur={(e) => handleBlur(e)}
        helperText={
          errors.publication_date &&
          Object.keys(blur).includes('publication_date') &&
          errors.publication_date
        }
        error={
          errors.publication_date &&
          Object.keys(blur).includes('publication_date') &&
          true
        }
      />

      <TextField
        multiline
        id="image_url"
        label="Image url"
        fullWidth
        autoComplete="off"
        name="image_url"
        onChange={handleChange}
        value={form.image_url}
        required
        onBlur={(e) => handleBlur(e)}
        helperText={
          errors.image_url &&
          Object.keys(blur).includes('image_url') &&
          errors.image_url
        }
        error={
          errors.image_url && Object.keys(blur).includes('image_url') && true
        }
      />

      <TextField
        id="extract"
        label="Extract"
        fullWidth
        autoComplete="off"
        name="extract"
        onChange={handleChange}
        value={form.extract}
        multiline
        required
        onBlur={(e) => handleBlur(e)}
        helperText={
          errors.extract &&
          Object.keys(blur).includes('extract') &&
          errors.extract
        }
        error={errors.extract && Object.keys(blur).includes('extract') && true}
      />
      <ButtonsForm isEdit={isEdit} handleCloseModal={handleCloseModal} />
    </Box>
  );
};

export default FormSubmitBook;
