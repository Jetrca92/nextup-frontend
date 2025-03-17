import type { Metadata } from "next"
import { Poppins } from 'next/font/google'
import { Box, Container, ThemeProvider } from "@mui/material"
import theme from "@/theme/theme"
import Navbar from "@/components/ui/Navbar"
import Footer from "@/components/ui/Footer"

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Nextup",
  description: "Nextup app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className} style={{ margin: 0, padding: 0 }}>
        <ThemeProvider theme={theme}>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            margin: 0,
            padding: 0,
            width: "100%"
          }}>
            <Box sx={{ bgcolor: "secondary.main" }}>
              <Navbar />
              <Container
                maxWidth={false}
                disableGutters
                sx={{
                  bgcolor: "transparent",
                  flex: 1,
                  width: "100%",
                  margin: 0,
                  padding: 0,
                }}
              >{children}</Container>
            </Box>

            <Footer />
          </Box>
        </ThemeProvider>
      </body>
    </html>
  )
}
