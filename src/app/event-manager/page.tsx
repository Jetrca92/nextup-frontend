'use client'

import EventsList from "@/components/events/EventsList";
import EventManagerEmpty from "@/components/events/EventsManagerEmpty";
import { EventType } from "@/models/event";
import { Box, Button, Typography } from "@mui/material";

export default function EventManager() {
  const events: EventType[] = [

  ]

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      backgroundColor: "transparent",
      marginY: "64px",
      width: "100%",
      boxSizing: 'border-box',
      padding: { xs: "0px 24px", sm: "0px 48px", md: "0px 120px" },
    }}>
      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h3" color="info.main" sx={{ lineHeight: "36px" }}>Added events</Typography>
        <Box sx={{ width: "115px" }}>
          <Button variant='contained' color="primary" sx={{ textTransform: "none" }}>Add event</Button>
        </Box>
      </Box>


      {/* Events */}
      {events.length < 1 ? (
        <EventManagerEmpty />
      ) : (
        <Box sx={{
          display: "flex",
          gap: "16px",
        }}>
          <EventsList events={events} />
        </Box>
      )}
    </Box>
  )
}
