import { TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import SnackBar from '../components/SnackBar';
import useForm from '../hooks/useForm';
import ButtonsForm from './ButtonsForm';
import { useContext } from 'react';
import { bookContext } from '../contexts/bookContext';

const FormSubmitBook = ({ dataToEdit, isEdit, handleCloseModal }) => {
  const { openSnackbar, handleCloseSnackbar, action } = useContext(bookContext);
  const { form, handleChange, handleSubmit } = useForm(
    dataToEdit,
    handleCloseModal,
  );

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
      />
      <TextField
        name="description"
        multiline
        rows="3"
        id="description"
        label="Description"
        autoComplete="off"
        fullWidth
        onChange={handleChange}
        value={form.description}
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
      />
      <TextField
        id="publication_date"
        label="Publication date"
        fullWidth
        autoComplete="off"
        name="publication_date"
        helperText={
          isEdit
            ? 'Only year or century'
            : 'Only put the year of publication, if it is a century, put everything without spaces, like this: S.IV'
        }
        onChange={handleChange}
        value={form.publication_date}
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
      />
      <TextField
        id="extract"
        label="Extract"
        fullWidth
        autoComplete="off"
        name="extract"
        helperText="some extract from your book"
        onChange={handleChange}
        value={form.extract}
        multiline
      />
      <ButtonsForm isEdit={isEdit} handleCloseModal={handleCloseModal} />
    </Box>
  );
};

export default FormSubmitBook;
