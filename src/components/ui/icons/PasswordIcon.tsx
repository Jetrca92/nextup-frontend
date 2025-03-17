import { Box } from "@mui/material"
import Image from "next/image"
import { FC } from "react"

const PasswordIcon: FC = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "20px", width: "20px" }}>
      <Image
        src="/icons/password-icon.png"
        alt="Password Icon"
        width={18.33}
        height={12.5}
      />
    </Box>
  )
}

export default PasswordIcon