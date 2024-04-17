import { bookContext } from '../contexts/bookContext';
import { useContext } from 'react';

import { Container, Grid, ListItemText, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import InputFilter from '../components/InputFilters';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import CardComponent from '../components/CardComponent';

const Home = () => {
  const { filteredBooks } = useContext(bookContext);

  return (
    <>
      <Container sx={{ margin: '30px auto' }} maxWidth="xl">
        <Typography align="center" variant="h2" margin="20px auto">
          Peliculas
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <InputFilter />
          <NavLink to="/home/submitbook">
            <Button variant="contained" color="success">
              <AutoStoriesOutlinedIcon sx={{ marginRight: 1 }} />
              <ListItemText primary="List of books" />
            </Button>
          </NavLink>
        </Box>

        <Grid container>
          {filteredBooks &&
            filteredBooks.map((book, i) => (
              <CardComponent key={i} book={book} />
            ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
