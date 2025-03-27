import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'
import { EventType } from 'react-hook-form'

interface UserState {
  events: EventType[]
}

const initialState: UserState = {
  events: [],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<EventType[]>) => {
      state.events = action.payload
    },
  },
})

export const {
  setEvents
} = userSlice.actions

export const selectUserEvents = (state: RootState) => state.user.events

export default userSlice.reducer
