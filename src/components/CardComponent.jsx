import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';

import { NavLink } from 'react-router-dom';

const maxCharacters = 150;
const truncateDescription = (description) => {
  if (description.length > maxCharacters) {
    return description.substring(0, maxCharacters) + '...';
  } else {
    return description;
  }
};

const CardComponent = ({ book }) => {
  const { title, description, image_url, pages, _id } = book;
  const shortDescription = truncateDescription(description);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} mt={5}>
      <Card
        sx={{
          width: '275px',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          height: '600px',

          margin: 'auto',
          padding: 2,
        }}
      >
        <CardMedia
          sx={{
            width: '100%',
            height: '300px',
            backgroundSize: 'contain',
            padding: 10,
          }}
          image={image_url}
        />
        <CardContent
          sx={{
            height: 250,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <Typography variant="h6" textAlign="center">
            {title}
          </Typography>
          <Typography textAlign="center">{shortDescription}</Typography>
          <Typography mt={1}>Pages: {pages}</Typography>
        </CardContent>
        <CardActions
          sx={{
            width: '200px',
            display: 'flex',
            justifyContent: 'center',
            padding: 0,
          }}
        >
          <NavLink to={`/home/${_id}`} style={{ textDecoration: 'none' }}>
            <Button variant="contained">See more</Button>
          </NavLink>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CardComponent;
