import { useContext } from 'react';
import { bookContext } from '../contexts/bookContext';
import { InputBase, IconButton, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useMQ from '../hooks/useMQ';

const InputFilter = () => {
  const { filter, handleFilter } = useContext(bookContext);
  const matches = useMQ('sm');
  const handleChange = (e) => {
    handleFilter(e.target.value);
  };

  return (
    <Box>
      <InputBase
        placeholder="Search book..."
        autoComplete="off"
        onChange={handleChange}
        value={filter}
        size="small"
        sx={{
          backgroundColor: 'white',
          borderRadius: '5px',
          paddingX: '5px',
          paddingY: 0,
          width: matches ? '250px' : '150px',
          fontSize: matches ? '20px' : '12px',
        }}
        inputProps={{ style: { padding: '0px' } }}
        startAdornment={
          <IconButton>
            <SearchIcon sx={{ color: 'black' }} />
          </IconButton>
        }
      />
    </Box>
  );
};

export default InputFilter;
