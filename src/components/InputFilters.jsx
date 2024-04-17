import Box from '@mui/material/Box';
import { useContext } from 'react';
import { bookContext } from '../contexts/bookContext';
import TextField from '@mui/material/TextField';

const InputFilter = () => {
  const { filter, handleFilter } = useContext(bookContext);
  const handleChange = (e) => {
    handleFilter(e.target.value);
  };

  return (
    <>
      <Box>
        <TextField
          autoComplete="off"
          onChange={handleChange}
          value={filter}
          size="small"
          helperText="Busque un libro"
          id="book"
          label="book"
          variant="outlined"
        ></TextField>
      </Box>
    </>
  );
};

export default InputFilter;
