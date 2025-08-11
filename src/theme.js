import { createTheme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

// Color palette
const primary = {
  main: '#4e73df',
  light: '#889ff0',
  dark: '#2c5acf',
  contrastText: '#fff',
};

const secondary = {
  main: '#858796',
  light: '#b7b9cc',
  dark: '#6b6d7c',
  contrastText: '#fff',
};

const success = {
  main: '#1cc88a',
  light: '#3ad9a0',
  dark: '#17a673',
  contrastText: '#fff',
};

const info = {
  main: '#36b9cc',
  light: '#5fd3e5',
  dark: '#2c9faf',
  contrastText: '#fff',
};

const warning = {
  main: '#f6c23e',
  light: '#f8d779',
  dark: '#dda20a',
  contrastText: '#fff',
};

const error = {
  main: '#e74a3b',
  light: '#f8b2ad',
  dark: '#be2617',
  contrastText: '#fff',
};

const grey = {
  50: '#f8f9fc',
  100: '#f1f3f9',
  200: '#e3e6f0',
  300: '#d1d3e2',
  400: '#b7b9cc',
  500: '#858796',
  600: '#6e707e',
  700: '#5a5c69',
  800: '#3a3b45',
  900: '#2c2f33',
};

// Breakpoints
const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

// Typography
const typography = {
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
    fontWeight: 700,
    fontSize: '2.5rem',
    lineHeight: 1.2,
  },
  h2: {
    fontWeight: 700,
    fontSize: '2rem',
    lineHeight: 1.2,
  },
  h3: {
    fontWeight: 700,
    fontSize: '1.75rem',
    lineHeight: 1.2,
  },
  h4: {
    fontWeight: 600,
    fontSize: '1.5rem',
    lineHeight: 1.2,
  },
  h5: {
    fontWeight: 600,
    fontSize: '1.25rem',
    lineHeight: 1.2,
  },
  h6: {
    fontWeight: 600,
    fontSize: '1rem',
    lineHeight: 1.2,
  },
  subtitle1: {
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: 1.5,
  },
  subtitle2: {
    fontWeight: 500,
    fontSize: '0.875rem',
    lineHeight: 1.5,
  },
  body1: {
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: 1.5,
  },
  body2: {
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: 1.5,
  },
  button: {
    fontWeight: 600,
    fontSize: '0.875rem',
    lineHeight: 1.5,
    textTransform: 'none',
  },
  caption: {
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: 1.5,
  },
  overline: {
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: 1.5,
    textTransform: 'uppercase',
  },
};

// Create theme
const theme = createTheme({
  palette: {
    mode: 'light',
    primary,
    secondary,
    success,
    info,
    warning,
    error,
    grey,
    text: {
      primary: grey[900],
      secondary: grey[700],
      disabled: grey[400],
    },
    divider: grey[200],
    background: {
      default: grey[100],
      paper: '#fff',
    },
  },
  breakpoints,
  typography,
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 0.125rem 0.25rem 0 rgba(58, 59, 69, 0.2)',
          },
        },
        contained: {
          '&:hover': {
            boxShadow: '0 0.125rem 0.25rem 0 rgba(58, 59, 69, 0.2)',
          },
        },
        outlined: {
          borderColor: grey[300],
          '&:hover': {
            backgroundColor: grey[50],
            borderColor: grey[400],
          },
        },
        sizeLarge: {
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
        },
        sizeMedium: {
          padding: '0.5rem 1.25rem',
          fontSize: '0.875rem',
        },
        sizeSmall: {
          padding: '0.25rem 1rem',
          fontSize: '0.75rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.1)',
          '&:hover': {
            boxShadow: '0 0.5rem 1rem 0 rgba(58, 59, 69, 0.15)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          fontWeight: 600,
        },
        sizeSmall: {
          height: 24,
        },
        sizeMedium: {
          height: 28,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 12,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: 0,
          boxShadow: '0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15)',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: grey[700],
          fontWeight: 600,
          marginBottom: 8,
          '&.Mui-focused': {
            color: grey[700],
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&.MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: grey[300],
              borderRadius: 6,
            },
            '&:hover fieldset': {
              borderColor: grey[400],
            },
            '&.Mui-focused fieldset': {
              borderColor: primary.main,
              boxShadow: `0 0 0 0.2rem ${alpha(primary.main, 0.25)}`,
            },
            '&.Mui-error': {
              '&:hover fieldset': {
                borderColor: error.main,
              },
              '&.Mui-focused fieldset': {
                borderColor: error.main,
                boxShadow: `0 0 0 0.2rem ${alpha(error.main, 0.25)}`,
              },
            },
          },
        },
        input: {
          '&::placeholder': {
            opacity: 1,
            color: grey[400],
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        rounded: {
          borderRadius: 12,
        },
        elevation1: {
          boxShadow: '0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.1)',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${grey[200]}`,
        },
        head: {
          fontWeight: 700,
          color: grey[700],
          textTransform: 'uppercase',
          fontSize: '0.7rem',
          letterSpacing: '0.1em',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:last-child td': {
            borderBottom: 0,
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderColor: grey[300],
          color: grey[700],
          '&.Mui-selected': {
            backgroundColor: primary.main,
            color: '#fff',
            '&:hover': {
              backgroundColor: primary.dark,
            },
          },
          '&:hover': {
            backgroundColor: grey[100],
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: grey[800],
          fontSize: '0.75rem',
          padding: '0.5rem 0.75rem',
        },
        arrow: {
          color: grey[800],
        },
      },
    },
  },
});

export default theme;
