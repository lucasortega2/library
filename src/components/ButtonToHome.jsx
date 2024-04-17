import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
const ButtonToHome = () => {
  return (
    <Box margin={3} display="flex" justifyContent="start">
      <NavLink to="/home">
        <Button variant="contained">
          <ArrowBackOutlinedIcon sx={{ marginRight: 1 }} /> Back to home
        </Button>
      </NavLink>
    </Box>
  );
};

export default ButtonToHome;
