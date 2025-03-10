import { TextField } from "@mui/material";

export default function Home() {
  const isError = false
  return (
    <>
      <TextField
        label="Your Label"
        variant="outlined"
        color="primary"
        error={isError}
        helperText={isError ? "Error message" : " "}
        sx={{
          margin: 5,
        }}
      />
    </>
  )
}
