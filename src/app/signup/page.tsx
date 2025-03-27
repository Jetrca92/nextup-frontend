'use client'

import CustomInput from "@/components/inputs/CustomInput";
import CustomPasswordInput from "@/components/inputs/CustomPasswordInput";
import EmailIcon from "@/components/ui/icons/EmailIcon";
import PasswordIcon from "@/components/ui/icons/PasswordIcon";
import EmptyAvatar from "@/components/ui/images/EmptyAvatar";
import { Box, Button, Typography } from "@mui/material";

export default function Signup() {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      width: "592px",
      backgroundColor: "transparent",
      marginTop: "32px",
      marginBottom: "205px",
      gap: "16px",
    }}>

      {/* Form title text */}
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}>
        <Typography variant="h2" color="primary">Hello!</Typography>
        <Typography variant="h4" color="textPrimary" fontWeight={400} sx={{ lineHeight: "30px" }}>Get started with your free account today.</Typography>
      </Box>

      {/* Upload profile picture */}
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <EmptyAvatar />
      </Box>

      {/* Signup form */}



    </Box>
  )
}
