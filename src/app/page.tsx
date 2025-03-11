'use client'

import CustomInput from "@/components/ui/CustomInput";
import theme from "@/theme/theme";
import { ThemeProvider } from "@emotion/react";

export default function Home() {
  const isError = true
  const errorText = "error wrong email"
  return (
    <>
      <ThemeProvider theme={theme}>
        <CustomInput
          id="email"
          label="Email Address"
          placeholder="Enter your email"
          type="email"
          error={isError}
          errorText={errorText}
          required
        />
      </ThemeProvider>
    </>
  )
}
