import { bookContext } from '../contexts/bookContext';
import { useContext } from 'react';
import { Container, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import CardComponent from '../components/CardComponent';
import Loader from '../components/Loader';
import Appbar from '../components/AppBar';

const Home = () => {
  const { filteredBooks, isLoading } = useContext(bookContext);

  return (
    <>
      <Appbar home={true} />
      <Container sx={{ margin: 'auto' }} maxWidth="xl">
        <Box display="flex" flexDirection="column" alignItems={'end'}>
          <Grid container>
            {isLoading ? (
              <Loader />
            ) : (
              filteredBooks.map((book, i) => (
                <CardComponent key={i} book={book} />
              ))
            )}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Home;
