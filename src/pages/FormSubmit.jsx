import { Button, Container } from '@mui/material';
import Box from '@mui/material/Box';
import ButtonToHome from '../components/ButtonToHome';
import ListOfBooks from '../components/ListOfBooks';
import Loader from '../components/Loader';
import { useContext, useState } from 'react';
import { bookContext } from '../contexts/bookContext';
import EditBookModal from '../modals/EditBookModal';
import Appbar from '../components/AppBar';
import SnackBar from '../components/SnackBar';

const FormSubmit = () => {
  const { isLoading } = useContext(bookContext);
  const [openModal, setOpenModal] = useState(false);
  const [dataToEdit, setDataToEdit] = useState();
  const { openSnackbar, handleCloseSnackbar, action, error } =
    useContext(bookContext);
  const handleOpenModal = (book) => {
    if (book) {
      setDataToEdit(book);
      setOpenModal(true);
    } else {
      setDataToEdit(null);
      setOpenModal(true);
    }
  };
  const handleCloseModal = () => setOpenModal(false);
  return (
    <>
      <Appbar home={false} />
      <Box
        component={Container}
        display="flex"
        flexDirection="column"
        maxWidth="xl"
      >
        {isLoading && <Loader />}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <ButtonToHome />
          <Button
            color="success"
            variant="contained"
            onClick={() => handleOpenModal()}
          >
            Add your book
          </Button>
        </Box>
        <EditBookModal
          openModal={openModal}
          handleCloseModal={handleCloseModal}
        />

        <ListOfBooks
          dataToEdit={dataToEdit}
          openModal={openModal}
          handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
        />
        <SnackBar
          open={openSnackbar}
          handleCloseSnackbar={handleCloseSnackbar}
          action={action}
          error={error}
        />
      </Box>
    </>
  );
};

export default FormSubmit;
