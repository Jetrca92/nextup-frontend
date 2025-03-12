import { Box, Typography, SxProps, Theme, Button } from "@mui/material";
import Image from "next/image";
import LocationIcon from "./ui/icons/LocationIcon";
import PeopleIcon from "./ui/icons/PeopleIcon";

interface FeaturedEventCardProps {
  imageSrc: string;
  title: string;
  startDateTime: string;
  location: string;
  attendance: number;
  sx?: SxProps<Theme>;
}

const FeaturedEventCard: React.FC<FeaturedEventCardProps> = ({
  imageSrc,
  title,
  startDateTime,
  location,
  attendance
}) => {
  return (
    <Box
      sx={{
        width: "367px",
        height: "387px",
        boxSizing: "border-box",
        borderRadius: "32px",
        borderWidth: "2px",
        borderColor: "#000000",
        borderStyle: "solid",
        overflow: "hidden",
      }}
    >
      {/* Image Section */}
      <Image
        src={imageSrc}
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
          width: "367px",
          height: "auto",
          padding: "16px", // Add padding for content inside the card
        }}
      >
        {/* Title */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "335px",
            height: "auto",
            gap: "4px",
          }}
        >
          <Typography variant="h3" color="primary.main">{title}</Typography>
          <Typography variant="caption" color="#667085">{startDateTime}</Typography>
        </Box>

        {/* Location & attendance */}
        <Box
          sx={{
            display: "flex",
            width: "335px",
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
            <Typography variant="caption" color="#667085">{location}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "4px",
            }}
          >
            <Typography variant="caption" color="#667085">{attendance}</Typography>
            <PeopleIcon />
          </Box>
        </Box>

        <Button variant="outlined" color="secondary">View</Button>
      </Box>
    </Box>
  );
};

export default FeaturedEventCard;
