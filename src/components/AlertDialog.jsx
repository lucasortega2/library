import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({ open, closeDialog, handleDelete }) {
  return (
    <Dialog open={open} onClose={closeDialog}>
      <DialogTitle>
        {'¿Estás seguro de eliminar el libro seleccionado?'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Esta acción eliminará permanentemente el libro.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog}>Cancelar</Button>
        <Button onClick={handleDelete} autoFocus>
          Eliminar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
