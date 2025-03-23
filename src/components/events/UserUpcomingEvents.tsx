import { Box, Button, Typography } from '@mui/material'
import { FC, useState } from 'react'
import EventCard from './EventCard'
import { EventType } from '@/models/event'
import UserEmptyEvents from './UserEmptyEvents'

interface UserUpcomingEventsProps {
  past: boolean
  events: EventType[]
}

const UserUpcomingEvents: FC<UserUpcomingEventsProps> = ({ events = [], past }) => {
  const [visibleCount, setVisibleCount] = useState(4)

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4)
  }

  if (events?.length === 0)
    return <UserEmptyEvents past />

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: "column",
      gap: "32px",
      width: "100%",
    }}>
      <Typography variant='h3' color='info.main' sx={{ lineHeight: "36px" }}>{past ? ("Past") : ("Upcoming")} Events</Typography>
      <Box sx={{
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
            <Box sx={{ width: "118px" }}>
              <Button variant='contained' color='info' onClick={loadMore} sx={{ textTransform: "none" }}>Load more</Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>

  )
}

export default UserUpcomingEvents
