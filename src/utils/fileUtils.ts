import { setError } from '@/store/errorSlice'
import * as API from '../api/Api'
import { ErrorType } from '@/constants/errorConstants'
import { AppDispatch } from '@/store/store'

export const isValidFile = (file: File | null, dispatch: AppDispatch) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif']
  if (!file) return false
  if (!allowedTypes.includes(file.type)) {
    dispatch(
      setError({
        type: ErrorType.FILE,
        message: 'Invalid file type. Must be jpeg, png or gif',
      }),
    )
    return false
  }
  return true
}

export const uploadUserAvatar = async (
  token: string,
  file: File,
  dispatch: AppDispatch,
) => {
  try {
    const formData = new FormData()
    formData.append('image', file as File, file?.name)
    const imageResponse = await API.uploadUserImage(
      token,
      formData,
      dispatch,
    )
    if (!imageResponse) return
    return imageResponse
  } catch {
    dispatch(
      setError({
        type: ErrorType.FILE,
        message: 'Failed to upload avatar image.',
      }),
    )
  }
}

export const uploadEventImage = async (
  id: string,
  token: string,
  file: File,
  dispatch: AppDispatch,
) => {
  try {
    const formData = new FormData()
    formData.append('image', file as File, file?.name)
    const imageResponse = await API.uploadEventImage(
      token,
      formData,
      id,
      dispatch,
    )
    if (!imageResponse) return
    return imageResponse
  } catch {
    dispatch(
      setError({
        type: ErrorType.FILE,
        message: 'Failed to upload location image.',
      }),
    )
  }
}
