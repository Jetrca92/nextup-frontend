import { Button, ButtonProps, Typography } from "@mui/material"
import { FC } from "react"
import GoogleIcon from "../icons/GoogleIcon"

const GoogleButton: FC<ButtonProps> = (props) => {
  return (
    <Button
      variant="contained"
      sx={{
        height: "40px",
        display: "flex",
        gap: "12px",
        backgroundColor: "primary.contrastText",
        textTransform: "none",
      }}
      {...props}
    >
      <GoogleIcon />
      <Typography variant="body1" color="#344054">Sign in with Google</Typography>
    </Button>
  )
}

export default GoogleButton