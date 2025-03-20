import { Box } from '@mui/material'
import { FC } from 'react'
import { EventType } from '@/models/event'
import FeaturedEventCard from './FeaturedEventCard'

interface FeaturedEventsProps {
  events: EventType[]
}
const FeaturedEvents: FC<FeaturedEventsProps> = ({ events = [] }) => {
  const visibleCount = 3

  if (events?.length === 0)
    return

  return (
    <Box sx={{
      display: "flex",
      gap: "16px",
    }}>
      {events.slice(0, visibleCount).map((event) => (
        <FeaturedEventCard event={event} key={event.id} />
      ))}

    </Box>
  )
}

export default FeaturedEvents
