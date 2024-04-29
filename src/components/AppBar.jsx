import { AppBar, Button, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import InputFilter from './InputFilters';
import DropDown from './Dropdown';
const Appbar = ({ home }) => {
  const navigate = useNavigate();
  return (
    <>
      <AppBar position="sticky" sx={{ background: '#3F51B5' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button onClick={() => navigate('/home')} sx={{ color: 'white' }}>
            Books
          </Button>
          {home && <InputFilter />}
          <DropDown />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Appbar;
