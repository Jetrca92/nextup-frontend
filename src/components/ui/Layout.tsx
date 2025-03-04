import { Container } from '@mui/material'
import { FC, ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container sx={{ bgcolor: 'tomato'}}>
        {children}
      </Container>
      <Footer />
    </>
    
  )
}

export default Layout