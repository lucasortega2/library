import { useState } from 'react';

const useSnackBar = () => {
  const [openSnackbar, setOpen] = useState(false);
  const [action, setAction] = useState('');
  const [error, setError] = useState({
    error: false,
    message: '',
  });
  const handleOpenSnackBar = (actionToDo, message) => {
    if (actionToDo == 'error') {
      setError({ error: true, message: message });
    } else {
      setError({
        error: false,
        message: '',
      });
      if (actionToDo == 'create') setAction('Created');
      if (actionToDo == 'upload') setAction('uploaded');
      if (actionToDo == 'delete') setAction('deleted');
    }

    setOpen(true);
  };
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return {
    openSnackbar,
    handleOpenSnackBar,
    handleCloseSnackbar,
    action,
    error,
  };
};

export default useSnackBar;
