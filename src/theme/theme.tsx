'use client'

import { createTheme } from "@mui/material";

const commonBtnStyles = {
  height: 40,
  borderRadius: 32,
  padding: "10px 16px",
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#2F3C7E',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FBEAEB',
    },
    info: {
      main: "#2D2D2D",
      contrastText: "#FFFFFF",
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
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "32px",
          backgroundColor: "#FFFFFF", 
          paddingTop: "22px",
          "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "primary.main",
            },
          },
          "&.Mui-error": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#FF3D00",
            },
          },
        },
        notchedOutline: {
          borderColor: "#FFFFFF",
          "& legend": {
            display: "none", // **Removes the notch completely**
          },
        },
        input: {
          height: "40px",
          padding: "10px 16px",
          color: "#000000",
          "&::placeholder": {
            color: "#667085",
            opacity: 1,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#000000",
          fontSize: "1rem",
          transform: "translate(14px, -6px) scale(1)", // Keeps label at the top
          position: "absolute",
        },
      },
      defaultProps: {
        shrink: true,
      },
    },
    MuiButton: {
      variants: [
        // Primary btn
        {
          props: { variant: "contained", color: "primary" },
          style: {
            backgroundColor: "primary.main",
            color: "#FFFFFF",
            ...commonBtnStyles,
            "&.Mui-disabled": {
              backgroundColor: "#B6C2F2", 
              color: "white",
            },
            "&:hover": {
              backgroundColor: "#222D6B",
            },
          },
        },
        
        // Secondary btn
        {
          props: { variant: "outlined", color: "secondary" },
          style: {
            border: "1px solid #2F3D7E",
            backgroundColor: "#FFFFFF",
            color: "#2F3D7E",
            ...commonBtnStyles,
            "&.Mui-disabled": {
              border: "1px solid #DAE0F8",
              backgroundColor: "#FFFFFF", 
              color: "#B6C2F2",
            },
            "&:hover": {
              border: "1px solid #222D6B",
              backgroundColor: "#F9FAFB",
              color: "222D6B",
            },
          },
        },

        // Black btn
        {
          props: { variant: "contained", color: "info" },
          style: {
            backgroundColor: "2D2D2D",
            color: "#FFFFFF",
            ...commonBtnStyles,
            "&.Mui-disabled": {
              backgroundColor: "#201618", 
              color: "#FFFFFF",
            },
            "&:hover": {
              backgroundColor: "#262021",
            },
          },
        },

        // Link btn
        {
          props: { variant: "text", color: "primary"},
          style: {
            color: "primary.main",
            textDecoration: "none",
            "&:hover": {
              color: "#222D6B",
            },
            "&.Mui-disabled": {
              color: "#B6C2F2",
            },
          },
        },

        // Black Link btn
        {
          props: { variant: "text", color: "info"},
          style: {
            color: "info.main",
            textDecoration: "none",
            "&:hover": {
              color: "#262021",
            },
            "&.Mui-disabled": {
              color: "#818181",
            },
          },
        },

        // Btn with icon
        {
          props: { startIcon: true },
          style: {
            paddingLeft: "12px",
          },
        },
      ]
    }
  }
})

export default theme