'use client'

import EventCard from "@/components/EventCard";
import theme from "@/theme/theme";
import { ThemeProvider } from "@mui/material";
export default function Home() {
  const authorized = true
  return (
    <>
      <ThemeProvider theme={theme}>
        <EventCard
          title="Eminem"
          startDateTime="1.2.2022, 20:00"
          location="6391 Elgin St. Celina, Delaware"
          authorized={authorized}
        />
      </ThemeProvider>

    </>
  )
}
