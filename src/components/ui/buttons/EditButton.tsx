import { ButtonProps, Button as MUIButton } from "@mui/material"
import { FC } from "react"
import EditIcon from "../icons/EditIcon"

const EditButton: FC<ButtonProps> = (props) => {
  return (
    <MUIButton
      variant="contained"
      color="primary"
      sx={{
        minWidth: 40,
        width: 40,
        height: 40,
        borderRadius: "50%",
        padding: 0,
        "&.Mui-disabled": {
        backgroundColor: "#B6C2F2", 
        },
        "&:hover": {
          backgroundColor: "#222D6B",
        }
      }}
      {...props}
    >
      <EditIcon />
    </MUIButton>    
  )
}

export default EditButton