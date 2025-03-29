'use client'

import SignupForm from "@/components/auth/SignupForm";
import { Box } from "@mui/material";

export default function Signup() {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      width: "592px",
      backgroundColor: "transparent",
      marginTop: "32px",
      marginBottom: "205px",
    }}>
      <SignupForm />
    </Box>
  )
}
