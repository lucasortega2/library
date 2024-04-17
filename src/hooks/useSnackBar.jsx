import { useState } from 'react';

const useSnackBar = () => {
  const [openSnackbar, setOpen] = useState(false);
  const [action, setAction] = useState('');

  const handleOpenSnackBar = (actionToDo) => {
    console.log(actionToDo);
    if (actionToDo == 'create') setAction('Created');
    if (actionToDo == 'upload') setAction('uploaded');
    if (actionToDo == 'delete') setAction('deleted');
    setOpen(true);
  };
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return { openSnackbar, handleOpenSnackBar, handleCloseSnackbar, action };
};

export default useSnackBar;
