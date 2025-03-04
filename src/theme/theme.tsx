import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#2F3C7E',
      contrastText: '2D2D2D', 
    },
    secondary: {
      main: '#FBEAEB',
    },
    background: {
      default: '#FBEAEB',
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 600,
      lineHeight: '4rem',
      color: '#0E0E2C',
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 500,
      lineHeight: '3.5rem',
      color: '#0E0E2C',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: '#0E0E2C',
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#0E0E2C',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.25rem',
      color: '#0E0E2C',
    },
    fontWeightBold: 500,
    caption: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1rem',
      color: '#0E0E2C',
    },
  },
})

export default theme