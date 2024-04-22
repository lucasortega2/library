import { useContext, useState } from 'react';
import { bookContext } from '../contexts/bookContext';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Box from '@mui/material/Box';
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import useForm from '../hooks/useForm';
import EditBookModal from '../modals/EditBookModal';

const ListOfBooks = () => {
  const { state } = useContext(bookContext);
  const { deleteBook } = useForm();
  const [open, setOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [dataToEdit, setDataToEdit] = useState();
  const handleOpenModal = (book) => {
    setDataToEdit(book);
    setOpenModal(true);
  };
  const handleCloseModal = () => setOpenModal(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <EditBookModal
        dataToEdit={dataToEdit}
        openModal={openModal}
        handleCloseModal={handleCloseModal}
      />
      <Box margin="0 auto">
        <List sx={{ width: 350 }}>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <LibraryBooksIcon />
            </ListItemIcon>
            <ListItemText primary="Books" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {state?.map((book, key) => {
                return (
                  <ListItemButton
                    onMouseEnter={() => setHoverIndex(key)}
                    onMouseLeave={() => setHoverIndex(null)}
                    key={key}
                    sx={{ padding: 0, pl: 4 }}
                  >
                    <ListItem>
                      <ListItemText id={key} primary={book.title} />
                      {hoverIndex === key && (
                        <>
                          <EditIcon onClick={() => handleOpenModal(book)} />

                          <DeleteForeverIcon
                            onClick={() => deleteBook(book._id)}
                          />
                        </>
                      )}
                    </ListItem>
                  </ListItemButton>
                );
              })}
            </List>
          </Collapse>
        </List>
      </Box>
    </Box>
  );
};

export default ListOfBooks;
