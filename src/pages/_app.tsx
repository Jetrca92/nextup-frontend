import type { AppProps } from 'next/app'
import Layout from '@/components/ui/Layout'
import { ThemeProvider } from '@mui/material'
import theme from '@/theme/theme'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}