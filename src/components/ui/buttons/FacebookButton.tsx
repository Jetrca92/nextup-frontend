import { Button, ButtonProps, Typography } from "@mui/material"
import { FC } from "react"
import FacebookIcon from "../icons/FacebookIcon"

const FacebookButton: FC<ButtonProps> = (props) => {
  return (
    <Button
      variant="contained"
      sx={{
        height: "40px",
        display: "flex",
        gap: "12px",
        backgroundColor: "#1877F2",
        textTransform: "none",
      }}
      {...props}
    >
      <FacebookIcon />
      <Typography variant="body1" color="primary.contrastText">Sign in with Facebook</Typography>
    </Button>
  )
}

export default FacebookButton