import { Box } from "@mui/material"
import Image from "next/image"
import { FC } from "react"

const DateIcon: FC = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "20px", width: "20px" }}>
      <Image
        src="/icons/date-icon.png"
        alt="Date Icon"
        width={16.67}
        height={18.33}
      />
    </Box>
  )
}

export default DateIcon