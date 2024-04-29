import {
  Box,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from '@mui/material';

import { useParams } from 'react-router-dom';
import useBook from '../hooks/useBook';
import Loader from '../components/Loader';
import ButtonToHome from '../components/ButtonToHome';
import Appbar from '../components/AppBar';
const Book = () => {
  const { id } = useParams();
  const { book, isLoading } = useBook(id);
  const { title, description, pages, image_url, publication_date, extract } =
    book || {};
  return (
    <>
      <Appbar home={false} />
      <Container maxWidth="md">
        <ButtonToHome />
        {isLoading ? (
          <Loader />
        ) : (
          <Paper
            elevation={5}
            sx={{
              padding: 3,
              margin: 'auto',
              marginTop: 5,
              backgroundColor: '#f3f3f3',
              borderRadius: 8,
            }}
          >
            {book ? (
              <Box>
                <Grid container spacing={2}>
                  <Grid
                    display={'flex'}
                    justifyContent={'start'}
                    item
                    xs={12}
                    sm={5}
                    lg={3}
                    xl={2}
                  >
                    <CardMedia
                      sx={{
                        maxWidth: '200px',
                        width: '100%',
                        objectFit: 'contain',
                        margin: 'auto',
                      }}
                      component="img"
                      image={image_url}
                      alt={title}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={7}
                    lg={9}
                    xl={10}
                    sx={{
                      padding: '0',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-around',
                      width: '100%',
                      minHeight: '250px',
                    }}
                  >
                    <Typography variant="h4" sx={{ marginBottom: 2 }}>
                      {title}
                    </Typography>
                    <Typography sx={{ marginBottom: 2 }}>{extract}</Typography>
                    <Typography variant="body1" sx={{ marginBottom: 1 }}>
                      <span style={{ fontWeight: 'bolder' }}>
                        Publish Date:{' '}
                      </span>
                      {publication_date}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: 1 }}>
                      {pages} pages
                    </Typography>
                  </Grid>
                </Grid>
                <Typography
                  display="block"
                  variant="h5"
                  sx={{ marginTop: 3, marginBottom: 1 }}
                >
                  Description
                </Typography>
                <Typography variant="body1">{description}</Typography>
              </Box>
            ) : (
              <Typography>Book not found/Retry Later</Typography>
            )}
          </Paper>
        )}
      </Container>
    </>
  );
};

export default Book;
