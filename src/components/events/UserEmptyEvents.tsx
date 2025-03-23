import { Box, Button, Typography } from '@mui/material'
import { FC } from 'react'

interface UserEmptyEventsProps {
  past: boolean
}

const UserEmptyEvents: FC<UserEmptyEventsProps> = (past) => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      gap: "32px",
      width: "100%",
    }}>
      <Typography variant='h3' color='info.main'>{past ? ("Past") : ("Upcoming")} Events</Typography>
      <Box sx={{
        display: 'flex',
        flexDirection: "column",
        gap: "16px",
      }}>
        <Typography variant='h4' color='#000000'>You are not attending any events!</Typography>
        <Typography variant='caption' color='#667085' sx={{ fontSize: "12px" }}>Lorem ipsum dolor sit amet consectetur. Id gravida morbi consequat quis elementum.</Typography>
      </Box>
      <Box sx={{
        width: "147px",
      }}>
        <Button variant='contained' color='info' sx={{ textTransform: "none" }}>Search events</Button>
      </Box>
    </Box>
  )
}

export default UserEmptyEvents
