import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4e73df',
      light: '#7e9eec',
      dark: '#2e59d9',
      contrastText: '#fff',
    },
    secondary: {
      main: '#1cc88a',
      light: '#4ad6a7',
      dark: '#17a673',
      contrastText: '#fff',
    },
    error: {
      main: '#e74a3b',
    },
    warning: {
      main: '#f6c23e',
    },
    info: {
      main: '#36b9cc',
    },
    success: {
      main: '#1cc88a',
    },
    grey: {
      100: '#f8f9fc',
      200: '#f1f3f9',
      300: '#dddfeb',
      400: '#d1d3e2',
      500: '#b7b9cc',
      600: '#858796',
      700: '#6e707e',
      800: '#5a5c69',
      900: '#3a3b45',
    },
    background: {
      default: '#f8f9fc',
    },
  },
  typography: {
    fontFamily: [
      'Nunito',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '0.875rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '0.75rem',
      fontWeight: 600,
      textTransform: 'uppercase',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 8,
          padding: '8px 16px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15)',
          border: 'none',
          transition: 'all 0.2s',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 0.5rem 2rem 0 rgba(58, 59, 69, 0.2)',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 600,
          textTransform: 'uppercase',
          fontSize: '0.7rem',
          letterSpacing: '0.5px',
          color: '#5a5c69',
          borderBottom: '1px solid #e3e6f0',
        },
        body: {
          borderBottom: '1px solid #e3e6f0',
        },
      },
    },
  },
});

export default theme;
