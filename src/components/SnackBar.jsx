import { Alert, Snackbar } from '@mui/material';

const SnackBar = ({ open, handleCloseSnackbar, action }) => {
  return (
    <div>
      <Snackbar
        open={open}
        onClose={handleCloseSnackbar}
        autoHideDuration={3000}
      >
        <Alert severity="success">{`book ${action} successfully`}</Alert>
      </Snackbar>
    </div>
  );
};

export default SnackBar;
