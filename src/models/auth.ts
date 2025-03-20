import { EventType } from "./event"

export type UserType = {
  id: string
  createdAt: string
  email: string
  firstName: string
  lastName: string
  avatarUrl?: string
  events?: EventType[]
}
