import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import FormSubmitBook from '../components/FormSubmitBook';
import { IconButton, DialogContent } from '@mui/material';

const style = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  height: '90vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  maxHeight: '90vh',
  overflowY: 'auto',
};

export default function EditBookModal({
  dataToEdit,
  openModal,
  handleCloseModal,
}) {
  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box display="flex" justifyContent="flex-end">
          <IconButton size="large" onClick={handleCloseModal}>
            <CloseIcon />
          </IconButton>
        </Box>

        <DialogContent sx={{ display: 'flex', justifyContent: 'center' }}>
          <FormSubmitBook
            isEdit={dataToEdit ? true : false}
            dataToEdit={dataToEdit}
            handleCloseModal={handleCloseModal}
          />
        </DialogContent>
      </Box>
    </Modal>
  );
}
