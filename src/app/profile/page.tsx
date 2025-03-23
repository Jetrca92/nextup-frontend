'use client'

import UserUpcomingEvents from "@/components/events/UserUpcomingEvents";
import { UserType } from "@/models/auth";
import { EventType } from "@/models/event";
import { Box, Typography } from "@mui/material";

export default function Search() {
  const emptyEvents: EventType[] = []
  const mockUser: UserType = {
    id: "123",
    createdAt: "2025-12-15T20:00:00Z",
    email: "user.test@email.com",
    firstName: "Mayor",
    lastName: "Mayor",
  }

  const mockEvents: EventType[] = [
    {
      id: "1",
      createdAt: new Date().toISOString(),
      imageUrl: "/images/landing1.jpg",
      title: "Mountain Trail Run",
      description: "A challenging trail run through the mountains.",
      location: "Rocky Mountains, CO",
      startDateTime: "2025-04-15T08:00:00Z",
      maximumUsers: 100,
      ownerId: "2",
      attendees: [],
    },
    {
      id: "3",
      createdAt: new Date().toISOString(),
      imageUrl: "/images/landing1.jpg",
      title: "Live Jazz Night",
      description: "Enjoy a night of smooth jazz music.",
      location: "New Orleans, LA",
      startDateTime: "2025-05-10T19:00:00Z",
      maximumUsers: 200,
      ownerId: "4",
    },
    {
      id: "4",
      createdAt: new Date().toISOString(),
      imageUrl: "/images/landing1.jpg",
      title: "Photography Workshop",
      description: "Learn the basics of photography from experts.",
      location: "San Francisco, CA",
      startDateTime: "2025-06-20T14:00:00Z",
      maximumUsers: 50,
      ownerId: "6",
    },
    {
      id: "7",
      createdAt: new Date().toISOString(),
      imageUrl: "/images/landing1.jpg",
      title: "Tech Innovators Conference",
      description: "A gathering of the brightest minds in tech.",
      location: "Silicon Valley, CA",
      startDateTime: "2025-07-12T09:00:00Z",
      maximumUsers: 500,
      ownerId: "4",
    },
    {
      id: "8",
      createdAt: new Date().toISOString(),
      imageUrl: "/images/landing1.jpg",
      title: "Food Festival",
      description: "Taste the best street food from around the world.",
      location: "Austin, TX",
      startDateTime: "2025-08-05T11:00:00Z",
      maximumUsers: 300,
      ownerId: "4",
    },
    {
      id: "9",
      createdAt: new Date().toISOString(),
      imageUrl: "/images/landing1.jpg",
      title: "Sunrise Yoga Session",
      description: "Start your day with a refreshing yoga session.",
      location: "Santa Monica Beach, CA",
      startDateTime: "2025-09-18T06:30:00Z",
      maximumUsers: 30,
      ownerId: "4",
    },
    {
      id: "11",
      createdAt: new Date().toISOString(),
      imageUrl: "/images/landing1.jpg",
      title: "City Cycling Tour",
      description: "Explore the city on a guided cycling tour.",
      location: "Portland, OR",
      startDateTime: "2025-10-02T10:00:00Z",
      maximumUsers: 50,
      ownerId: "4",
    },
    {
      id: "12",
      createdAt: new Date().toISOString(),
      imageUrl: "/images/landing1.jpg",
      title: "National Park Hike",
      description: "A guided hike through stunning landscapes.",
      location: "Yellowstone National Park, WY",
      startDateTime: "2025-11-12T07:00:00Z",
      maximumUsers: 40,
      ownerId: "4",
    },
    {
      id: "13",
      createdAt: new Date().toISOString(),
      imageUrl: "/images/landing1.jpg",
      title: "Hackathon Challenge",
      description: "Compete in a 48-hour coding challenge.",
      location: "Seattle, WA",
      startDateTime: "2025-12-01T09:00:00Z",
      maximumUsers: 150,
      ownerId: "4",
    },
    {
      id: "14",
      createdAt: new Date().toISOString(),
      imageUrl: "/images/landing1.jpg",
      title: "Indie Rock Concert",
      description: "Experience the best of indie rock bands live.",
      location: "Chicago, IL",
      startDateTime: "2025-12-15T20:00:00Z",
      maximumUsers: 250,
      ownerId: "4",
    },
  ]
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      backgroundColor: "transparent",
      marginY: "64px",
      width: "100%",
      boxSizing: 'border-box',
      padding: { xs: "0px 24px", sm: "0px 48px", md: "0px 120px" },
      gap: "64px",
    }}>
      {/* Header */}
      <Typography variant="h1" color="primary.main">Hi {mockUser.firstName} {mockUser.lastName}!</Typography>

      {/* Events */}
      <Box sx={{
        display: "flex",
        gap: "20px",
      }}>
        <UserUpcomingEvents events={mockEvents} past={false} />
        <UserUpcomingEvents events={emptyEvents} past={true} />
      </Box>
    </Box>
  )
}
