import { UserType } from "./auth"

export type EventType = {
  id: string
  createdAt: string
  imageUrl: string
  title: string
  description: string
  location: string
  startDateTime: string
  maximumUsers: number
  ownerId: string
  attendees?: UserType[]
}
