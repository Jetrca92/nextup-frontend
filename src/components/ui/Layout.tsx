import { Container } from '@mui/material'
import { FC } from 'react'
import { LayoutProps } from '../../../.next/types/app/layout'
import Navbar from './Navbar'
import Footer from './Footer'

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