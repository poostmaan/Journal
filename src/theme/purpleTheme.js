import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#1a73e8',
            contrast: "#051e34"
        },
        secondary: {
            main: '#543884'
        },
        error: {
            main: red.A400
        }
    }
})





