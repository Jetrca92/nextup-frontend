"use client";

import { usePathname } from "next/navigation";
import { Box, Container, ThemeProvider } from "@mui/material";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { routes } from "@/constants/routesContants";
import theme from "@/theme/theme";
import { Provider } from "react-redux";
import store from "@/store/store";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const sharedBgRoutes: string[] = [routes.HOME, routes.LOGIN, routes.SIGNUP, routes.EVENT];
  const hasSharedBackground = sharedBgRoutes.includes(pathname);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", width: "100%" }}>
          <Box sx={{ bgcolor: hasSharedBackground ? "secondary.main" : "transparent" }}>
            <Navbar />
            <Container
              component="main"
              maxWidth={false}
              disableGutters
              sx={{
                bgcolor: hasSharedBackground ? "transparent" : "white",
                flex: 1,
                width: "100%",
                margin: 0,
                padding: 0,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {children}
            </Container>
          </Box>
          <Footer />
        </Box>
      </Provider>
    </ThemeProvider>

  );
}
