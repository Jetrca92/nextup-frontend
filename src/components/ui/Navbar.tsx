import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { FC } from 'react'
import NavbarLogo from './images/NavbarLogo';
import NavbarAvatar from './images/NavbarAvatar';

const Navbar: FC = () => {
  const authenticated = true
  return (
    <AppBar
      position="static"
      sx={{
        width: "100%",
        height: "104px",
        boxShadow: "none",
        padding: { xs: "16px 24px", sm: "24px 48px", md: "32px 120px" },
        boxSizing: 'border-box',
        backgroundColor: "secondary.main",
        justifyContent: "center",
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
          <Button variant='text' color='info' sx={{ textTransform: "none", fontWeight: 400 }}>Home</Button>
          <Button variant='text' color='info' sx={{ textTransform: "none", fontWeight: 400 }}>Search</Button>
          {authenticated && (
            <Button variant='text' color='info' sx={{ textTransform: "none", fontWeight: 400 }}>Event manager</Button>
          )}
        </Box>

        <Box sx={{
          display: "flex",
          gap: "16px",
        }}>
          {authenticated ? (
            <>
              <Button variant='text' color='info' sx={{ textTransform: "none", fontWeight: 400 }}>Logout</Button>
              <Box sx={{ width: "40px", height: "40px" }}>
                <NavbarAvatar />
              </Box>
            </>

          ) : (
            <>
              <Button variant='text' color='info' sx={{ textTransform: "none" }}>Login</Button>
              <Button variant='contained' color='primary' sx={{ textTransform: "none" }}>Sign up</Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
