import { Dispatch } from "@reduxjs/toolkit"
import { apiRequestWithAuthHeaders } from "./Api"
import { apiMethods, apiRoutes } from "@/constants/apiConstants"
import { setError } from "@/store/errorSlice"
import { ErrorType } from "@/constants/errorConstants"
import { UserType } from "@/models/auth"

export const fetchUser = async (token: string) => {
  const response = await apiRequestWithAuthHeaders<void, UserType>(
    apiMethods.GET,
    apiRoutes.FETCH_USER,
    token,
  )
  return response.data
}

export const uploadUserImage = async (
  token: string,
  data: FormData,
  dispatch: Dispatch,
) => {
  const response = await apiRequestWithAuthHeaders<FormData, UserType>(
    apiMethods.POST,
    `${apiRoutes.UPLOAD_USER_IMAGE_PREFIX}`,
    token,
    data,
  )
  if (response.data?.statusCode) {
    dispatch(setError({ type: ErrorType.FILE, message: response.data.message }))
  }
  return response.data
}