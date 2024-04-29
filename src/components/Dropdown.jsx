import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import useMQ from '../hooks/useMQ';

const ListOfBooks = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const matches = useMQ('sm');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        endIcon={open ? <ExpandLess /> : <ExpandMore />}
        variant="contained"
        color="primary"
        size={matches ? 'large' : 'medium'}
        sx={{ textTransform: 'none', fontWeight: 'bold', borderRadius: '20px' }}
      >
        Admins
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        MenuListProps={{ sx: { padding: matches ? 1 : 0 } }}
      >
        <MenuItem
          component={NavLink}
          to="/home/submitbook"
          onClick={handleClose}
          sx={{
            padding: 1,
          }}
        >
          <ListItemIcon
            sx={matches ? null : { display: 'flex', justifyContent: 'center' }}
          >
            <LibraryBooksIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={
              matches ? null : { style: { fontSize: '12px' } }
            }
            primary="List of books"
          />
        </MenuItem>
      </Menu>
    </>
  );
};

export default ListOfBooks;
