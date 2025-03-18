import { Box } from "@mui/material"
import Image from "next/image"
import { FC } from "react"

const SearchIcon: FC = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "24px", width: "24px" }}>
      <Image
        src="/icons/search-icon.png"
        alt="Search Icon"
        width={18}
        height={18}
      />
    </Box>
  )
}

export default SearchIcon