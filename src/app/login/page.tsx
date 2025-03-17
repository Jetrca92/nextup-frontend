'use client'

import CustomInput from "@/components/inputs/CustomInput";
import CustomPasswordInput from "@/components/inputs/CustomPasswordInput";
import FacebookButton from "@/components/ui/buttons/FacebookButton";
import GoogleButton from "@/components/ui/buttons/GoogleButton";
import EmailIcon from "@/components/ui/icons/EmailIcon";
import PasswordIcon from "@/components/ui/icons/PasswordIcon";
import { Box, Button, Typography } from "@mui/material";

export default function Login() {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      width: "592px",
      backgroundColor: "transparent",
      marginTop: "32px",
      marginBottom: "337px",
      gap: "16px",
    }}>

      {/* Form title text */}
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}>
        <Typography variant="h2" color="primary">Wellcome back!</Typography>
        <Typography variant="h4" color="textPrimary" fontWeight={400} sx={{ lineHeight: "30px" }}>We are glad that you are back.</Typography>
      </Box>

      {/* Login form */}
      <Box sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        gap: "16px",
      }}>
        <CustomInput
          label="Email"
          id="email"
          error={false}
          type="email"
          icon={<EmailIcon />}
        />
        <CustomPasswordInput
          label="Password"
          id="password"
          error={false}
          icon={<PasswordIcon />}
        />
        <Button variant="contained" color="primary" sx={{ textTransform: "none" }}>Login</Button>
        <FacebookButton />
        <GoogleButton />
        <Box sx={{
          display: "flex",
          justifyContent: "space-between",
        }}>
          <Typography variant="body1" color="info.main" sx={{ lineHeight: "20px" }}>Don’t have an account yet?</Typography>
          <Button variant="text" color="primary" sx={{ height: "20px", textTransform: "none" }}>Sign up</Button>
        </Box>
      </Box>

    </Box>
  )
}
