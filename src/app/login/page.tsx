'use client'

import LoginForm from "@/components/auth/LoginForm";
import { Box } from "@mui/material";

export default function Login() {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      width: "592px",
      backgroundColor: "transparent",
      marginTop: "32px",
      marginBottom: "337px",
    }}>
      <LoginForm />
    </Box>
  )
}
