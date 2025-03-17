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
      <Box sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        gap: "16px",
      }}>
        <Box sx={{
          display: "flex",
          gap: "16px",
        }}>
          <CustomInput
            label="First name"
            id="firstName"
            error={false}
          />
          <CustomInput
            label="Last name"
            id="lastName"
            error={false}
          />
        </Box>
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
        <CustomPasswordInput
          label="Confirm password"
          id="confirmPassword"
          error={false}
          icon={<PasswordIcon />}
        />
        <Button variant="contained" color="primary" sx={{ textTransform: "none" }}>Sign up</Button>
        <Box sx={{
          display: "flex",
          justifyContent: "space-between",
        }}>
          <Typography variant="body1" color="info.main" sx={{ lineHeight: "20px" }}>Already have an account?</Typography>
          <Button variant="text" color="primary" sx={{ height: "20px", textTransform: "none" }}>Sign in</Button>
        </Box>
      </Box>


    </Box>
  )
}
