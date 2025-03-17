'use client'

import LocationIcon from "@/components/ui/icons/LocationIcon";
import PeopleIcon from "@/components/ui/icons/PeopleIcon";
import { Box, Button, Typography } from "@mui/material";
import { CalendarIcon } from "@mui/x-date-pickers";
import Image from "next/image";

export default function Event() {
  const authenticated = false
  return (
    <Box sx={{ display: "flex", backgroundColor: "transparent", margin: "0px", width: "1440px" }}>

      {/* Left side */}
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        padding: "114.5px 20px 114.5px 120px",
        gap: "32px",
        boxSizing: 'border-box',
        width: "628px",
        margin: 0,
      }}>

        {/* Hero */}
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px"
        }}>
          <Typography variant="h1" color="primary" sx={{ lineHeight: "76px" }}>Eminem at Delaware</Typography>
        </Box>

        {/* Details */}
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          gap: "8px"
        }}>
          <Box sx={{
            display: "flex",
            gap: "4px",
            alignItems: "center",
          }}>
            <CalendarIcon />
            <Typography variant="body1" color="info" sx={{ lineHeight: "30px" }}>1.2.2020, 20:00</Typography>
          </Box>
          <Box sx={{
            display: "flex",
            gap: "4px",
            alignItems: "center",
          }}>
            <LocationIcon />
            <Typography variant="body1" color="info" sx={{ lineHeight: "30px" }}>6391 Elgin St. Celina, Delaware</Typography>
          </Box>
          <Box sx={{
            display: "flex",
            gap: "4px",
            alignItems: "center",
          }}>
            <PeopleIcon />
            <Typography variant="body1" color="info" sx={{ lineHeight: "30px" }}>400</Typography>
          </Box>
        </Box>

        {/* Event description */}
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px"
        }}>
          <Typography variant="body1" color="info" fontWeight={500}>FIND YOUR NEXT EVENT</Typography>
          <Typography variant="body1" color="info">
            Aliquet sed iaculis posuere egestas integer. Lectus morbi lectus consequat, massa etiam a sed in.
            Sollicitudin id dignissim tincidunt ipsum vel morbi diam  ultricies fermentum. Aliquet sed iaculis posuere egestas integer.
            Lectus morbi lectus consequat, massa etiam a sed in. Sollicitudin id dignissim tincidunt ipsum vel morbi diam  ultricies fermentum.
          </Typography>
        </Box>

        {/* Login cta if unauthenticated */}
        {!authenticated && (
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px"
          }}>
            <Box sx={{ width: "79px" }}>
              <Button variant="contained" color="primary" sx={{ textTransform: "none" }}>Log in</Button>
            </Box>
            <Typography variant="caption" color="#667085">To attend event you need to login.</Typography>
          </Box>
        )}
      </Box>

      {/* Right side */}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Image
          src="/eminem.jfif"
          alt="Event image"
          width={812}
          height={832}
          style={{ objectFit: "cover" }}
        />
      </Box>

    </Box>
  )
}
