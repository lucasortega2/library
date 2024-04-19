import { useTheme, useMediaQuery } from '@mui/material';

const useMQ = (breakpoint) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up(breakpoint));

  return matches;
};

export default useMQ;
