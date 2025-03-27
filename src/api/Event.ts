import { Dispatch } from "@reduxjs/toolkit"
import { apiRequestWithAuthHeaders } from "./Api"
import { EventType } from "@/models/event"
import { apiMethods, apiRoutes } from "@/constants/apiConstants"
import { setError } from "@/store/errorSlice"
import { ErrorType } from "@/constants/errorConstants"

export const uploadEventImage = async (
  token: string,
  data: FormData,
  id: string,
  dispatch: Dispatch,
) => {
  const response = await apiRequestWithAuthHeaders<FormData, EventType>(
    apiMethods.POST,
    `${apiRoutes.UPLOAD_EVENT_IMAGE_PREFIX}/${id}`,
    token,
    data,
  )
  if (response.data?.statusCode) {
    dispatch(setError({ type: ErrorType.FILE, message: response.data.message }))
  }
  return response.data
}