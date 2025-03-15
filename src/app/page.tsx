'use client'

import { Box, Button, Typography } from "@mui/material";
export default function Home() {
  return (
    <>
      <Box sx={{ display: "flex", backgroundColor: "secondary.main", margin: "0px" }}>

        {/* Left side */}
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          padding: "146px 20px 146px 120px",
          gap: "32px",
        }}>

          {/* Hero */}
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px"
          }}>
            <Typography variant="h4" color="info">FIND THE BEST EVENTS</Typography>
            <Typography variant="h1" color="primary">Are you looking for your next event?</Typography>
          </Box>

          {/* Search */}
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px"
          }}>
            <Typography variant="caption" fontWeight={500}>FIND YOUR NEXT EVENT</Typography>
            <Box sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px"
            }}>
              <Box sx={{
                width: "90px",
                justifyContent: "end",
              }}>
                <Button variant="contained" color="primary">Search</Button>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Right side */}

      </Box>
    </>
  )
}
