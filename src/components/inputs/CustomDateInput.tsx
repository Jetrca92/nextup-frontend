import { Box, Typography, SxProps, Theme } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface CustomDateInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  id: string;
  error: boolean;
  errorText?: string;
  icon?: React.ReactNode;
  type?: string;
  sx?: SxProps<Theme>;
}

const CustomDateInput: React.FC<CustomDateInputProps> = ({
  label,
  placeholder,
  id,
  error,
  errorText,
  sx }) => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box display="flex" flexDirection="column" sx={{ gap: "6px", width: "100%", ...sx }}>

          <Typography
            component="label"
            htmlFor={id}
            sx={{ fontSize: "1rem", fontWeight: 400, color: "#000000" }}
          >
            {label}
          </Typography>

          <DatePicker slotProps={{
            textField: {
              placeholder,
              error: !!error,
              helperText: error ? errorText : "",
              variant: "outlined",
              sx: {
                boxSizing: "border-box",
                width: "100%",
                height: "40px",
                borderRadius: "32px",
                paddingTop: 0,
                backgroundColor: "#FFFFFF",
                border: error ? "1px solid #F04438" : "1px solid #FFFFFF",
                fontSize: "1rem",
                "& .MuiOutlinedInput-root": {
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid transparent",
                },
                "& .MuiInputBase-root": {
                  paddingTop: 0,
                },
                "& .MuiInputBase-input": {
                  boxSizing: "border-box",
                },
                "& input": {
                  "&::placeholder": {
                    color: "#667085",
                    opacity: 1,
                  },
                },
                ...sx,
              },
            }
          }} />
        </Box>
      </LocalizationProvider>

      {error && errorText && (
        <Typography variant="body2" color="#F04438" sx={{ fontSize: "0.875rem" }}>
          {errorText}
        </Typography>
      )}
    </>
  );
};

export default CustomDateInput;
