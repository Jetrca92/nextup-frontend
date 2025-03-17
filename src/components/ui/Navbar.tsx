import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { FC } from 'react'
import NavbarLogo from './images/NavbarLogo';

const Navbar: FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        width: "100%",
        height: "104px",
        boxShadow: "none",
        padding: { xs: "16px 24px", sm: "24px 48px", md: "32px 120px" },
        boxSizing: 'border-box',
        backgroundColor: "transparent",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          padding: "0px !important",
        }}
      >
        <NavbarLogo />

        <Box sx={{
          display: "flex",
          gap: "48px",
        }}>
          <Button variant='text' color='info'>Home</Button>
          <Button variant='text' color='info'>Search</Button>
        </Box>

        <Box sx={{
          display: "flex",
          gap: "16px",
        }}>
          <Button variant='text' color='info'>Login</Button>
          <Button variant='contained' color='primary'>Sign up</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
