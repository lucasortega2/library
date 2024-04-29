import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { Button, ListItemIcon, Typography } from '@mui/material';

const iconStyle = {
  fontSize: 'large',
  margin: 0.5,
};

const ButtonsForm = ({ isEdit }) => {
  const IconComponent = isEdit ? EditIcon : AddIcon;
  return (
    <ListItemIcon
      sx={{ width: 300, justifyContent: 'center', marginBottom: '20px' }}
    >
      <Button
        type="submit"
        variant="contained"
        color="success"
        sx={{
          paddingY: 1,
          paddingX: 1.5,
        }}
      >
        <Typography fontSize="14px">
          {isEdit ? 'Save book' : 'Add book'}
        </Typography>
        <IconComponent sx={iconStyle} />
      </Button>
    </ListItemIcon>
  );
};

export default ButtonsForm;
