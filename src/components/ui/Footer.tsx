import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import FooterLogo from './images/FooterLogo'

const Footer: FC = () => {
  return (
    <Box sx={{
      padding: { xs: "16px 24px", sm: "24px 48px", md: "32px 120px" },
      boxSizing: 'border-box',
      background: '#FFFFFF',
      width: '100%',
      height: '88px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <FooterLogo />
      <Typography color='primary.main'>All Rights Reserved | skillupmentor.com</Typography>
    </Box>
  )
}

export default Footer
