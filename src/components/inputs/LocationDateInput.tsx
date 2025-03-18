import { Box } from "@mui/material";
import CustomInput from "./CustomInput";
import CustomDateInput from "./CustomDateInput";
import LocationIcon from "../ui/icons/LocationIcon";



const LocationDateInput: React.FC = () => {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <CustomInput label="Location" placeholder="Enter location" id="location" error={false} icon={<LocationIcon />} sx={{ borderRadius: "32px 0 0 32px" }} />
      <CustomDateInput label="Date" id="startDateTime" placeholder="Enter date" error={false} sx={{ borderRadius: "0 32px 32px 0" }} />
    </Box>
  );
};

export default LocationDateInput;
