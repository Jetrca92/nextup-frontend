'use client'

import EmptyEvents from "@/components/EmptyEvents";
import LocationDateInput from "@/components/inputs/LocationDateInput";
import { Box, Button, Typography } from "@mui/material";

export default function Search() {
  const results = []
  return (
    <Box sx={{ display: "flex", flexDirection: "column", backgroundColor: "transparent", margin: "0px", width: "100%", boxSizing: 'border-box' }}>

      {/* Hero */}
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        padding: "0px 120px",
        gap: "64px",
        width: "1440px",
        marginY: "16px",
      }}>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}>
          <Typography variant="body1" color="#0E0E2C" fontWeight={500} sx={{ lineHeight: "24px" }}>SEARCH FOR EVENTS</Typography>
          <Typography variant="h1" color="primary" sx={{ lineHeight: "76px" }}>What is next?</Typography>
        </Box>
        <Box sx={{
          display: "flex",
          gap: "16px",
        }}>
          <LocationDateInput />
          <Box sx={{
            width: "90px",
            display: "flex",
            alignItems: "end",
          }}>
            <Button variant="contained" color="primary" sx={{ textTransform: "none" }}>Search</Button>
          </Box>
        </Box>
      </Box>

      {/* Events */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "32px", padding: "64px 120px", backgroundColor: "#FFFFFF" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <Typography variant="h2" color="info.main" sx={{ lineHeight: "56px" }}>Events</Typography>
          <Typography variant="h3" color="info.main" sx={{ lineHeight: "36px" }}>All Upcoming Events</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {results.length < 1 ? (
            <EmptyEvents />
          ) : (
            <></>
          )}
        </Box>
      </Box>




    </Box>
  )
}
