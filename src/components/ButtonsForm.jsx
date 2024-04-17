import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import { Button, ListItemIcon, ListItemText } from '@mui/material';

const iconStyle = {
  fontSize: 'large',
  margin: 0.5,
};

const ButtonsForm = ({ isEdit, handleCloseModal }) => {
  const IconComponent = isEdit ? EditIcon : AddIcon;
  return (
    <ListItemIcon
      sx={{ width: 300, justifyContent: 'center', marginBottom: '20px' }}
    >
      {isEdit && (
        <Button
          onClick={handleCloseModal}
          variant="outlined"
          sx={{ padding: 1 }}
        >
          <ListItemText secondary="Cancel edit" />
          <CancelIcon sx={iconStyle} />
        </Button>
      )}
      <Button type="submit" variant="outlined" sx={{ padding: 1 }}>
        <ListItemText secondary={isEdit ? 'Edit your book' : 'Add your book'} />
        <IconComponent sx={iconStyle} />
      </Button>
    </ListItemIcon>
  );
};

export default ButtonsForm;
