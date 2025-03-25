import { Box, Typography } from '@mui/material'
import { FC } from 'react'

const EventManagerEmpty: FC = () => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      width: "100%",
      padding: "32px 0 166px 0",
    }}>
      <Typography variant='h4' color='info.main' sx={{ lineHeight: "30px" }}>No added events</Typography>
      <Typography variant='caption' color='#667085' sx={{ fontSize: "14px", lineHeight: "16px" }}>
        No events added. Add new event with the click on button “Add event”
      </Typography>
    </Box>
  )
}

export default EventManagerEmpty
