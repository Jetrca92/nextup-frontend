import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import SearchIcon from '../ui/icons/SearchIcon'

const EmptyEvents: FC = () => {
  return (
    <Box sx={{
      padding: "32px 0 166px 0",
      display: 'flex',
      flexDirection: "column",
      gap: "24px",
    }}>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "end",
        height: "48px",
      }}>
        <SearchIcon />
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        gap: "4px",
      }}>
        <Typography variant='h3' color='#000000' sx={{ lineHeight: "36px" }}>No events found</Typography>
        <Typography variant='caption' color='#667085'>No events found. Try another location or date!</Typography>
      </Box>
    </Box>
  )
}

export default EmptyEvents
