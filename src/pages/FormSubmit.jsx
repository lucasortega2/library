import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import ButtonToHome from '../components/ButtonToHome';
import ListOfBooks from '../components/ListOfBooks';
import FormSubmitBook from '../components/FormSubmitBook';
import MQ from '../hooks/useMQ';
import Loader from '../components/Loader';
import { useContext } from 'react';
import { bookContext } from '../contexts/bookContext';
const FormSubmit = () => {
  const matches = MQ('md');
  const { isLoading } = useContext(bookContext);
  return (
    <>
      <Container maxWidth="xl">
        {isLoading && <Loader />}
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
