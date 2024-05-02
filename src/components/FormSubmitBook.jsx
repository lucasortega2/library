import { TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import useForm from '../hooks/useForm';
import ButtonsForm from './ButtonsForm';
import useMQ from '../hooks/useMQ';
const FormSubmitBook = ({ dataToEdit, isEdit, handleCloseModal }) => {
  const matches = useMQ('md');
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
      display="inline-flex"
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
      width="50vw"
      minWidth="300px"
      height="100%"
      minHeight="650px"
    >
      <Typography
        variant={'h4'}
        align="center"
        sx={{ fontWeight: 'bold', color: '#333' }}
      >
        {isEdit ? 'Edit Book' : 'Add New Book'}
      </Typography>
      <TextField
        sx={!matches ? { width: '250px' } : undefined}
        inputProps={!matches ? { style: { fontSize: '13px' } } : undefined}
        size={!matches ? 'small' : 'medium'}
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
        sx={!matches ? { width: '250px' } : undefined}
        inputProps={!matches ? { style: { fontSize: '13px' } } : undefined}
        size={!matches ? 'small' : 'medium'}
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
        sx={!matches ? { width: '250px' } : undefined}
        inputProps={!matches ? { style: { fontSize: '13px' } } : undefined}
        size={!matches ? 'small' : 'medium'}
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
        sx={!matches ? { width: '250px' } : undefined}
        inputProps={!matches ? { style: { fontSize: '13px' } } : undefined}
        size={!matches ? 'small' : 'medium'}
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
        sx={!matches ? { width: '250px' } : undefined}
        inputProps={!matches ? { style: { fontSize: '13px' } } : undefined}
        size={!matches ? 'small' : 'medium'}
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
        sx={!matches ? { width: '250px' } : undefined}
        inputProps={!matches ? { style: { fontSize: '13px' } } : undefined}
        size={!matches ? 'small' : 'medium'}
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
