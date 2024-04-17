import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import ButtonToHome from '../components/ButtonToHome';
import ListOfBooks from '../components/ListOfBooks';
import FormSubmitBook from '../components/FormSubmitBook';

const FormSubmit = () => {
  return (
    <>
      <Grid container flexDirection="column">
        <ButtonToHome />
        <Box display="flex" flexDirection="column">
          <ListOfBooks />
          <FormSubmitBook isEdit={false} />
        </Box>
      </Grid>
    </>
  );
};

export default FormSubmit;
