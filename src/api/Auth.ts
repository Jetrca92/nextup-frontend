import { LoginUserFields } from "@/hooks/useLogin"
import { apiRequest } from "./Api"
import { apiMethods, apiRoutes } from "@/constants/apiConstants"
import { ApiRegisterUser } from "@/hooks/useRegister"
import { setError } from "@/store/errorSlice"
import { ErrorType } from "@/constants/errorConstants"

export const login = async (data: LoginUserFields, dispatch: Dispatch) => {
  const response = await apiRequest<LoginUserFields, void>(
    apiMethods.POST,
    apiRoutes.LOGIN,
    data,
  )
  if (response.data?.statusCode) {
    dispatch(setError({ type: ErrorType.API, message: response.data.message }))
    return
  }
  return response
}

export const signup = async (data: ApiRegisterUser, dispatch: Dispatch) => {
  const response = await apiRequest<ApiRegisterUser, void>(
    apiMethods.POST,
    apiRoutes.SIGNUP,
    data,
  )
  if (response.data?.statusCode) {
    dispatch(setError({ type: ErrorType.API, message: response.data.message }))
    return
  }
  return response
}

export const getGoogleUser = async (token: string) =>
  apiRequest<void, { user: any }>(
    apiMethods.GET,
    `${apiRoutes.GOOGLE_LOGIN}?token=${token}`,
  )
