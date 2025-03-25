'use client'

import ActivitiesTable from "@/components/activity/ActivitiesTable";
import { ComponentType, UserActionType, UserActivityType } from "@/models/activity";
import { UserType } from "@/models/auth";
import { Box, Typography } from "@mui/material";

export default function ActivityLog() {
  const mockUser: UserType = {
    id: "user-123",
    createdAt: "John Doe",
    email: "johndoe@example.com",
    firstName: "john",
    lastName: "doe",
  };

  const activities: UserActivityType[] = [
    {
      id: "activity-1",
      createdAt: new Date().toISOString(),
      userId: mockUser.id,
      action: UserActionType.CLICK,
      componentType: ComponentType.BUTTON,
      location: "/dashboard",
      user: mockUser,
    },
    {
      id: "activity-2",
      createdAt: new Date().toISOString(),
      userId: mockUser.id,
      action: UserActionType.ADD_VALUE,
      componentType: ComponentType.INPUT,
      newValue: "New task added",
      location: "/tasks",
      user: mockUser,
    },
    {
      id: "activity-3",
      createdAt: new Date().toISOString(),
      userId: mockUser.id,
      action: UserActionType.SCROLL,
      location: "/profile",
      user: mockUser,
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
    }}>
      {/* Header */}
      <Typography variant="h3" color="info.main" sx={{ lineHeight: "36px" }}>Activity log</Typography>


      {/* Activities */}
      <ActivitiesTable activities={activities} />
    </Box>
  )
}
