import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { FC } from 'react'
import NavbarLogo from './images/NavbarLogo';
import NavbarAvatar from './images/NavbarAvatar';
import Link from 'next/link';
import { routes } from '@/constants/routesContants';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, signout } from '@/store/authSlice';

const Navbar: FC = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const logout = () => {
    dispatch(signout())
  }

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
        <Link href={routes.HOME}><NavbarLogo /></Link>
        <Box sx={{
          display: "flex",
          gap: "48px",
        }}>
          <Link href={routes.HOME}>
            <Button variant='text' color='info' sx={{ textTransform: "none", fontWeight: 400 }}>Home</Button>
          </Link>
          <Link href={routes.SEARCH}>
            <Button variant='text' color='info' sx={{ textTransform: "none", fontWeight: 400 }}>Search</Button>
          </Link>

          {user && (
            <Link href={routes.EVENT_MANAGER}>
              <Button variant='text' color='info' sx={{ textTransform: "none", fontWeight: 400 }}>Event manager</Button>
            </Link>
          )}
        </Box>

        <Box sx={{
          display: "flex",
          gap: "16px",
        }}>
          {user ? (
            <>
              <Link href={routes.HOME} onClick={logout}><Button variant='text' color='info' sx={{ textTransform: "none", fontWeight: 400 }}>Logout</Button></Link>
              <Box sx={{ width: "40px", height: "40px" }}>
                <Link href={routes.PROFILE}><NavbarAvatar /></Link>
              </Box>
            </>
          ) : (
            <>
              <Link href={routes.LOGIN}><Button variant='text' color='info' sx={{ textTransform: "none" }}>Login</Button></Link>
              <Link href={routes.SIGNUP}><Button variant='contained' color='primary' sx={{ textTransform: "none" }}>Sign up</Button></Link>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
