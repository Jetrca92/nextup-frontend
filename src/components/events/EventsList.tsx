import { Box, Button } from '@mui/material'
import { FC, useState } from 'react'
import EventCard from './EventCard'
import EmptyEvents from './EmptyEvents'
import { EventType } from '@/models/event'

interface EventsListProps {
  events: EventType[]
}
const EventsList: FC<EventsListProps> = ({ events = [] }) => {
  const [visibleCount, setVisibleCount] = useState(7)

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 7)
  }

  if (events?.length === 0)
    return <EmptyEvents />

  return (
    <Box sx={{
      padding: "32px 0 72px 0",
      display: 'flex',
      flexDirection: "column",
      gap: "16px",
      width: "100%",
    }}>
      {events.slice(0, visibleCount).map((event) => (
        <EventCard event={event} key={event.id} />
      ))}
      {visibleCount < events.length && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ width: "118px", flexShrink: 0 }}>
            <Button variant='contained' color='info' onClick={loadMore} sx={{ textTransform: "none" }}>Load more</Button>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default EventsList
