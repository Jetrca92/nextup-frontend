import { Box, InputBase, Typography, SxProps, Theme, InputAdornment } from "@mui/material";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  id: string;
  error?: boolean;
  errorText?: string;
  icon?: React.ReactNode;
  type?: string;
  sx?: SxProps<Theme>;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  id,
  error,
  errorText,
  icon,
  type,
  sx,
  value,
  onChange,
  onBlur,
}) => {
  return (
    <Box display="flex" flexDirection="column" sx={{ width: "100%" }}>
      <Box display="flex" flexDirection="column" sx={{ gap: "6px", width: "100%" }}>

        <Typography
          component="label"
          htmlFor={id}
          sx={{ fontSize: "1rem", fontWeight: 400, color: "#000000" }}
        >
          {label}
        </Typography>

        <InputBase
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          name={id}
          sx={{
            width: "100%",
            height: "40px",
            borderRadius: "32px",
            padding: "10px 16px",
            backgroundColor: "#FFFFFF",
            border: error ? "1px solid #F04438" : "1px solid #FFFFFF",
            fontSize: "1rem",
            "& .MuiInputBase-input": {
              color: "#000000",
            },
            "&.Mui-focused": {
              borderColor: "#2F3C7E",
              outline: "none",
            },
            "& input": {
              "&::placeholder": {
                color: "#667085",
                opacity: 1,
              },
            },
            ...sx,
          }}
          startAdornment={icon ? <InputAdornment position="start">{icon}</InputAdornment> : null}
        />
      </Box>
      {error && errorText && (
        <Typography variant="body2" color="#F04438" sx={{ fontSize: "0.875rem", width: "100%" }}>
          {errorText}
        </Typography>
      )}
    </Box>
  );
};

export default CustomInput;
