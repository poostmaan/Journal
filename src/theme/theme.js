import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#262254',
    },
    secondary: {
      main: '#543884',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;