import { Alert, Snackbar } from '@mui/material';

const SnackBar = ({ open, handleCloseSnackbar, action, error }) => {
  return (
    <Snackbar
      autoHideDuration={1000}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      onClose={handleCloseSnackbar}
    >
      <Alert
        sx={{
          width: '100%',
          justifyContent: 'center',
          fontSize: '20px',
          '& .MuiAlert-icon': {
            fontSize: '30px',
          },
        }}
        severity={error.error ? 'warning' : 'success'}
      >
        {error.error ? error.message : `book ${action} successfully`}
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
