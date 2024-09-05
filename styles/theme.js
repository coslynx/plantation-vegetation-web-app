import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#0072ff',
      contrastText: '#fff',
    },
    secondary: {
      main: '#00c6ff',
      contrastText: '#fff',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.43,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          padding: '1rem 2rem',
          textTransform: 'none',
          transition: 'background-color 0.3s ease',
          '&:hover': {
            backgroundColor: '#005cb8',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          '& .MuiOutlinedInput-root': {
            borderRadius: 20,
          },
          '& .MuiInputBase-input': {
            padding: '1rem',
          },
        },
      },
    },
  },
});

export default theme;