'use client'

import FeaturedEventCard from "@/components/FeaturedEventCard";
import theme from "@/theme/theme";
import { ThemeProvider } from "@mui/material";
export default function Home() {
  const attendance = 100
  return (
    <>
      <ThemeProvider theme={theme}>
        <FeaturedEventCard
          imageSrc="/eminem.jfif"
          title="Eminem"
          startDateTime="1.2.2022, 20:00"
          location="6391 Elgin St. Celina, Delaware"
          attendance={attendance}
        />
      </ThemeProvider>

    </>
  )
}
