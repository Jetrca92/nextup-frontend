import { Box, Typography } from '@mui/material'
import { FC } from 'react'

const EmptyActivity: FC = () => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      width: "100%",
      padding: "32px 0 166px 0",
    }}>
      <Typography variant='h4' color='info.main' sx={{ lineHeight: "30px" }}>No activity log found</Typography>
      <Typography variant='caption' color='#667085' sx={{ fontSize: "14px", lineHeight: "16px" }}>
        No activity log found. Refresh the page.
      </Typography>
    </Box>
  )
}

export default EmptyActivity
