import {
  Button,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavLink, useParams } from 'react-router-dom';

import useBook from '../hooks/useBook';

const Book = () => {
  const { id } = useParams();
  const book = useBook(id);
  const { title, description, pages, image_url, publication_date, extract } =
    book || {};
  return (
    <Container maxWidth="md">
      <Paper
        elevation={5}
        sx={{
          padding: 3,
          margin: 'auto',
          marginTop: 5,
        }}
      >
        <NavLink to={'/home'}>
          <Button variant="contained" sx={{ marginBottom: 3, fontSize: 12 }}>
            <ArrowBackIcon sx={{ marginRight: 1 }} /> Back to books
          </Button>
        </NavLink>
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
                maxWidth: '300px',
                width: '100%',
                objectFit: 'contain',
                margin: 'auto',
              }}
              component="img"
              image={image_url}
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
            <Typography variant="h4">{title} </Typography>
            <Typography variant="body1">{description} </Typography>
            <Typography variant="body1">
              <span style={{ fontWeight: 'bolder' }}>Publish Date:</span>
              {publication_date}
            </Typography>
            <Typography variant="body1">{pages} pages</Typography>
          </Grid>
          <Grid marginTop={0} xs={12} item>
            <Typography variant="h5">{extract ? 'Extract' : false}</Typography>
            <Typography>{extract} </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Book;
