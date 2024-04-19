import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import ButtonToHome from '../components/ButtonToHome';
import ListOfBooks from '../components/ListOfBooks';
import FormSubmitBook from '../components/FormSubmitBook';
import MQ from '../hooks/useMQ';
const FormSubmit = () => {
  const matches = MQ('md');
  return (
    <>
      <Container maxWidth="xl">
        <ButtonToHome />
        <Box display="flex" flexDirection={matches ? 'row' : 'column'}>
          <ListOfBooks />
          <FormSubmitBook isEdit={false} />
        </Box>
      </Container>
    </>
  );
};

export default FormSubmit;
