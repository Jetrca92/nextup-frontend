import type { Metadata } from "next"
import { Poppins } from 'next/font/google'
import ClientLayout from "@/components/ClientLayout"

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
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
