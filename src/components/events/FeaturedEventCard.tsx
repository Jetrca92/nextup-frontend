import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import LocationIcon from "../ui/icons/LocationIcon";
import PeopleIcon from "../ui/icons/PeopleIcon";
import { EventType } from "@/models/event";

interface FeaturedEventCardProps {
  event: EventType
}

const FeaturedEventCard: React.FC<FeaturedEventCardProps> = ({
  event
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "367px",
        height: "387px",
        boxSizing: "border-box",
        borderRadius: "32px",
        border: "2px solid #D0D5DD",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Image Section */}
      <Image
        src={event.imageUrl}
        alt="card image"
        width={367}
        height={207}
      />

      {/* Data Section */}
      <Box
        sx={{
          display: "flex",
          boxSizing: "border-box",
          justifyContent: "start",
          alignItems: "center",
          flexDirection: "column",
          gap: "16px",
          width: "100%",
          height: "auto",
          padding: "16px", // Add padding for content inside the card
        }}
      >
        {/* Title */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "auto",
            gap: "4px",
          }}
        >
          <Typography variant="h3" color="primary.main">{event.title}</Typography>
          <Typography variant="caption" color="#667085">{event.startDateTime}</Typography>
        </Box>

        {/* Location & attendance */}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "auto",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "4px",
              alignItems: "center",
            }}
          >
            <LocationIcon />
            <Typography variant="caption" color="#667085">{event.location}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "4px",
            }}
          >
            <Typography variant="caption" color="#667085">{event.attendees?.length}</Typography>
            <PeopleIcon />
          </Box>
        </Box>

        <Button variant="outlined" color="secondary">View</Button>

      </Box>
    </Box>
  );
};

export default FeaturedEventCard;
