import type { Metadata } from "next"
import { Poppins } from 'next/font/google'
import { Container, ThemeProvider } from "@mui/material"
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
      <body className={poppins.className}>
        <ThemeProvider theme={theme}>
          <Navbar />
            <Container sx={{ bgcolor: "tomato" }}>{children}</Container>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
