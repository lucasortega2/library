import { bookContext } from '../contexts/bookContext';
import { useContext } from 'react';
import { Container, Grid, ListItemText, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import InputFilter from '../components/InputFilters';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import CardComponent from '../components/CardComponent';
import MQ from '../hooks/useMQ';
import Loader from '../components/Loader';

const Home = () => {
  const { filteredBooks, isLoading } = useContext(bookContext);
  const matches = MQ('md');
  return (
    <>
      <Container sx={{ margin: '30px auto' }} maxWidth="xl">
        <Typography align="center" variant="h2" margin="20px auto">
          Peliculas
        </Typography>
        <Box
          display="flex"
          flexDirection={matches ? 'row' : 'column'}
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
          {isLoading ? (
            <Loader />
          ) : (
            filteredBooks.map((book, i) => (
              <CardComponent key={i} book={book} />
            ))
          )}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
