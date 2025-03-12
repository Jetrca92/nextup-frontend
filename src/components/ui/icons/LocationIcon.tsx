import { Box } from "@mui/material"
import Image from "next/image"
import { FC } from "react"

const LocationIcon: FC = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "20px", width: "20px" }}>
      <Image
        src="/icons/location-icon.png"
        alt="Location Icon"
        width={11.67}
        height={16.67}
      />
    </Box>
  )
}

export default LocationIcon