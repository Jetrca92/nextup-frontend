import { Box, Typography, SxProps, Theme, Button } from "@mui/material";
import EditIcon from "./ui/icons/EditIcon";

interface EventCardProps {
  title: string;
  startDateTime: string;
  location: string;
  authorized: boolean;
  sx?: SxProps<Theme>;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  startDateTime,
  location,
  authorized,
}) => {
  return (
    <Box
      sx={{
        width: "590px",
        height: "auto",
        display: "flex",
        boxSizing: "border-box",
        border: "2px solid #D0D5DD",
        borderRadius: "32px",
        padding: "16px",
        gap: "16px",
        overflow: "hidden",
      }}
    >
      {/* Date */}
      <Box
        sx={{
          width: "97px",
          height: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h3">28. Aug</Typography>
        <Typography variant="caption">Fri 22.00{startDateTime}</Typography>
      </Box>

      {/* Title and location */}
      <Box
        sx={{
          width: "306px",
          height: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h3">{title}</Typography>
        <Typography variant="caption" color="#667085">{location}</Typography>
      </Box>

      <Box sx={{ width: "123px" }}>
        {authorized ? (
          <Button variant="contained" color="primary" startIcon={<EditIcon />}>Edit</Button>
        ) : (
          <Button variant="outlined" color="secondary">View</Button>
        )}

      </Box>

    </Box>
  );
};

export default EventCard;
