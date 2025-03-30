import { Box, InputBase, Typography, SxProps, Theme, InputAdornment, IconButton } from "@mui/material";
import { useState } from "react";

interface CustomPasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  id: string;
  error: boolean;
  errorText?: string;
  icon?: React.ReactNode;
  sx?: SxProps<Theme>;
}

const CustomPasswordInput: React.FC<CustomPasswordInputProps> = ({
  label,
  placeholder,
  id,
  error,
  errorText,
  icon,
  sx,
  value,
  onChange,
  onBlur,
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const togglePasswordVisibility = () => setShowPassword(!showPassword)
  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex" flexDirection="column" sx={{ gap: "6px", width: "100%", ...sx }}>

        <Typography
          component="label"
          htmlFor={id}
          sx={{ fontSize: "1rem", fontWeight: 400, color: "#000000" }}
        >
          {label}
        </Typography>

        <InputBase
          type={showPassword ? 'text' : 'password'}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
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
          endAdornment={icon ? (
            <InputAdornment position="end">
              <IconButton onClick={togglePasswordVisibility} edge="end">
                {icon}
              </IconButton>
            </InputAdornment>
          ) : null}
        />
      </Box>
      {error && errorText && (
        <Typography variant="body2" color="#F04438" sx={{ fontSize: "0.875rem" }}>
          {errorText}
        </Typography>
      )}
    </Box>
  );
};

export default CustomPasswordInput;
