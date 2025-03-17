'use client'

import ImageSlider from "@/components/ImageSlider";
import CustomDateInput from "@/components/inputs/CustomDateInput";
import CustomInput from "@/components/inputs/CustomInput";
import LocationIcon from "@/components/ui/icons/LocationIcon";
import { Box, Button, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ display: "flex", backgroundColor: "transparent", margin: "0px", width: "100%" }}>

      {/* Left side */}
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        padding: "146px 20px 146px 120px",
        gap: "32px",
        boxSizing: 'border-box',
        width: "628px",
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
          <Box sx={{ display: "flex" }}>
            <CustomInput label="Location" placeholder="Enter location" id="location" error={false} icon={<LocationIcon />} />
            <CustomDateInput label="Date" id="startDateTime" placeholder="Enter date" error={false} />
          </Box>
          <Box sx={{
            display: "flex",
            justifyContent: "end",
          }}>
            <Box sx={{
              width: "90px",
            }}>
              <Button variant="contained" color="primary" sx={{ textTransform: "none" }}>Search</Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Right side */}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <ImageSlider />
      </Box>

    </Box>
  )
}
