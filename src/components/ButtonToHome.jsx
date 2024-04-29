import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
const ButtonToHome = () => {
  return (
    <Box marginTop={3} marginBottom={3}>
      <NavLink to="/home">
        <Button variant="outlined">
          <ArrowBackOutlinedIcon sx={{ marginRight: 1 }} /> Back to home
        </Button>
      </NavLink>
    </Box>
  );
};

export default ButtonToHome;
