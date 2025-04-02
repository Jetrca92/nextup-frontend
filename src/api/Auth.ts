import { LoginUserFields } from "@/hooks/useLogin"
import { apiRequest } from "./Api"
import { apiMethods, apiRoutes } from "@/constants/apiConstants"
import { ApiRegisterUser } from "@/hooks/useRegister"
import { setError } from "@/store/errorSlice"
import { ErrorType } from "@/constants/errorConstants"
import { Dispatch } from "@reduxjs/toolkit"

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
  try {
    console.log("🚀 Calling apiRequest with:", data);

    const response = await apiRequest<ApiRegisterUser, void>(
      apiMethods.POST,
      apiRoutes.SIGNUP,
      data
    );

    console.log("📢 Response from apiRequest:", response); // Should log API response

    if (response?.data?.statusCode) {
      dispatch(setError({ type: ErrorType.API, message: response.data.message }));
      return;
    }

    return response;
  } catch (error) {
    console.error("❌ signup function error:", error);
  }
};

export const getGoogleUser = async (token: string) =>
  apiRequest<void, { user: any }>(
    apiMethods.GET,
    `${apiRoutes.GOOGLE_LOGIN}?token=${token}`,
  )
