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

  const { form, handleChange, handleSubmit, handleBlur, errors, blur } =
    useForm(initialForm, dataToEdit, handleCloseModal);
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
      <Typography
        variant={'h4'}
        align="center"
        sx={{ fontWeight: 'bold', color: '#333' }}
      >
        {isEdit ? 'Edit Book' : 'Add New Book'}
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
        type="date"
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
        InputLabelProps={{
          shrink: true,
        }}
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

      <ButtonsForm isEdit={isEdit} handleCloseModal={handleCloseModal} />
    </Box>
  );
};

export default FormSubmitBook;
