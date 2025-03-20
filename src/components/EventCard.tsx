import { Box, Typography, Button } from "@mui/material";
import EditIcon from "./ui/icons/EditIcon";
import { EventType } from "@/models/event";

interface EventCardProps {
  event: EventType
}

const EventCard: React.FC<EventCardProps> = ({
  event
}) => {
  const authorized = false
  return (
    <Box
      sx={{
        width: "100%",
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
      {/* Date and title*/}
      <Box sx={{ display: "flex", gap: "16px", width: "100%", }}>
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
          <Typography variant="caption">Fri 22.00</Typography>
        </Box>

        {/* Title and location */}
        <Box
          sx={{
            height: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h3">{event.title}</Typography>
          <Typography variant="caption" color="#667085">{event.location}</Typography>
        </Box>
      </Box>


      <Box sx={{ width: "123px", flexShrink: 0 }}>
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
