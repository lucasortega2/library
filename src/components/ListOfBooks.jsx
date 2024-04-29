import { useContext, useState } from 'react';
import { bookContext } from '../contexts/bookContext';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Box from '@mui/material/Box';
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import useForm from '../hooks/useForm';
import EditBookModal from '../modals/EditBookModal';
import useMQ from '../hooks/useMQ';
import AlertDialog from './AlertDialog';

const ListOfBooks = ({
  dataToEdit,
  openModal,
  handleOpenModal,
  handleCloseModal,
}) => {
  const { state } = useContext(bookContext);
  const { deleteBook } = useForm();
  const [open, setOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [bookToDeleteId, setBookToDeleteId] = useState(null);
  const matches = useMQ('md');
  const opelDialog = (id) => {
    setBookToDeleteId(id);
    setOpen(true);
  };
  const closeDialog = () => {
    setBookToDeleteId(null);
    setOpen(false);
  };
  const handleDeleteBook = () => {
    if (bookToDeleteId) {
      deleteBook(bookToDeleteId);
      closeDialog();
    }
  };

  return (
    <Box>
      <EditBookModal
        dataToEdit={dataToEdit}
        openModal={openModal}
        handleCloseModal={handleCloseModal}
      />
      <TableContainer component={Paper} margin="0 auto">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ width: '10%', paddingX: 0 }}>
                Title
              </TableCell>
              <TableCell align="center" sx={{ width: '10%', paddingX: 0 }}>
                Page
              </TableCell>
              {matches && (
                <TableCell align="center" sx={{ width: '65%', paddingX: 0 }}>
                  Extract
                </TableCell>
              )}
              <TableCell
                align="center"
                sx={{ width: matches ? '10%' : '30%', paddingX: 0 }}
              >
                Publication date
              </TableCell>
              <TableCell sx={{ width: '5%', padding: 0 }} align="center">
                Acciones
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state?.map((book, key) => {
              return (
                <TableRow
                  hover
                  onMouseEnter={() => setHoverIndex(key)}
                  onMouseLeave={() => setHoverIndex(null)}
                  key={key}
                  sx={{ height: '75px', width: '20px' }}
                >
                  <TableCell>{book.title}</TableCell>
                  <TableCell align="center">{book.pages}</TableCell>
                  {matches && <TableCell>{book.extract}</TableCell>}
                  <TableCell align="center">{book.publication_date}</TableCell>
                  <TableCell style={{ padding: 0 }}>
                    <Box
                      display="flex"
                      justifyContent="space-around"
                      marginRight={2}
                      visibility={hoverIndex === key ? 'visible' : 'hidden'}
                    >
                      <IconButton
                        color="primary"
                        onClick={() => handleOpenModal(book)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => opelDialog(book._id)}
                      >
                        <DeleteForeverIcon />
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <AlertDialog
        open={open}
        closeDialog={closeDialog}
        handleDelete={handleDeleteBook}
      />
    </Box>
  );
};

export default ListOfBooks;
