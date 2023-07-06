import { createTheme } from '@mui/material/styles';


// Define primary and secondary colors
const primaryColor = '#183028';
const secondaryColor = '#C9EA75';

// Define the MUI theme
export const lightTheme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'light',
    primary: {
      main: primaryColor,
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: secondaryColor,
      contrastText: primaryColor
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
      disabled: '#999999'
    },
    error: {
      main: '#F44336',
      contrastText: '#FFFFFF'
    },
    warning: {
      main: '#FFC107',
      contrastText: '#FFFFFF'
    },
    info: {
      main: '#2196F3',
      contrastText: '#FFFFFF'
    },
    success: {
      main: '#4CAF50',
      contrastText: '#FFFFFF'
    }
  },

  typography: {
    fontFamily: 'Pinar, Arial, sans-serif',
    h5: {
      color: primaryColor,
      fontWeight: 500
    },
    h6: {
      fontWeight: 700,
      color: primaryColor,
      fontSize: 16
    }
  },
  shape: {
    borderRadius: 0
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: '0.125rem'
        },
        elevation1: {
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)'
        },
        elevation2: {
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)'
        },
        elevation3: {
          boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.05)'
        },
        elevation4: {
          boxShadow: '0px 16px 32px rgba(0, 0, 0, 0.05)'
        }
      }
    }
  }
});

export const darkTheme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'dark',
    primary: {
      main: primaryColor,
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: secondaryColor,
      contrastText: '#000000'
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B3B3B3',
      disabled: '#808080'
    },
    error: {
      main: '#F44336',
      contrastText: '#FFFFFF'
    },
    warning: {
      main: '#FFC107',
      contrastText: '#FFFFFF'
    },
    info: {
      main: '#2196F3',
      contrastText: '#FFFFFF'
    },
    success: {
      main: '#4CAF50',
      contrastText: '#FFFFFF'
    }
  },

  typography: {
    fontFamily: 'Pinar, Arial, sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: '1.2',
      letterSpacing: '-0.01562em'
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: '1.2',
      letterSpacing: '-0.00833em'
    },
    h3: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: '1.2',
      letterSpacing: '0em'
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.5rem',
      lineHeight: '1.2',
      letterSpacing: '0.00735em'
    },
    h5: {
      fontWeight: 700,
      fontSize: '1.25rem',
      lineHeight: '1.2',
      letterSpacing: '0em'
    },
    h6: {
      fontWeight: 700,
      fontSize: '1rem',
      lineHeight: '1.2',
      letterSpacing: '0.0075em'
    },
    button: {
      fontWeight: 600
    }
  },
  shape: {
    borderRadius: 0
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: '0.125rem'
        },
        elevation1: {
          boxShadow: '0px 2px 4px rgba(255, 255, 255, 0.05)'
        },
        elevation2: {
          boxShadow: '0px 4px 8px rgba(255, 255, 255, 0.05)'
        },
        elevation3: {
          boxShadow: '0px 8px 16px rgba(255, 255, 255, 0.05)'
        },
        elevation4: {
          boxShadow: '0px 16px 32px rgba(255, 255, 255, 0.05)'
        }
      }
    }
  }
});