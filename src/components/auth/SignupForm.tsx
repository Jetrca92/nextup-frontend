import { ChangeEvent, FC, useEffect, useState } from 'react'
import {
  RegisterUserFields,
  useRegisterForm,
} from '../../hooks/useRegister'
import * as API from '../../api/Api'
import { useDispatch, useSelector } from 'react-redux'
import { Controller } from 'react-hook-form'
import { Box, Typography } from '@mui/material'
import CustomInput from '../inputs/CustomInput'
import EmailIcon from '../ui/icons/EmailIcon'
import CustomPasswordInput from '../inputs/CustomPasswordInput'
import PasswordIcon from '../ui/icons/PasswordIcon'
import { useRouter } from 'next/navigation'
import { routes } from '@/constants/routesContants'
import { RootState } from '@/store/store'
import { clearAllErrors, setError } from '@/store/errorSlice'
import { isValidFile, uploadUserAvatar } from '@/utils/fileUtils'
import { ErrorType } from '@/constants/errorConstants'
import { login } from '@/store/authSlice'

const SignupForm: FC = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { handleSubmit, errors, control } = useRegisterForm()
  const { apiError, fileError, showApiError, showFileError } = useSelector(
    (state: RootState) => state.error,
  )

  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false)
  const [showRepeatPassword, setShowRepeatPassword] = useState(false)

  useEffect(() => {
    dispatch(clearAllErrors())
  }, [dispatch])

  const handleFileChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target.files) {
      const myfile = target.files[0]
      if (!isValidFile(myfile, dispatch)) return
      setFile(myfile)
    }
  }

  useEffect(() => {
    if (!file) {
      setPreview(null)
      return
    }
    const reader = new FileReader()
    reader.onloadend = () => setPreview(reader.result as string)
    reader.readAsDataURL(file)
  }, [file])

  const togglePasswordVisibility = () => setShowPassword(!showPassword)
  const toggleRepeatPasswordVisibility = () =>
    setShowRepeatPassword(!showRepeatPassword)

  const onSubmit = handleSubmit(async (data: RegisterUserFields) => {
    if (!file) {
      dispatch(
        setError({ type: ErrorType.FILE, message: 'Please upload an avatar' }),
      )
      return
    }

    const { confirmPassword, ...submitData } = data
    try {
      const response = await API.signup(submitData, dispatch)

      const loginResponse = await API.login(
        {
          email: data.email,
          password: data.password,
        },
        dispatch,
      )

      await uploadUserAvatar(
        loginResponse.data.access_token,
        response.data.id,
        file,
        dispatch,
      )
      const user = await API.fetchUser(loginResponse.data.access_token)

      dispatch(login({ user, token: loginResponse.data.access_token }))
      router.push(routes.HOME)
    } catch (error) {
      dispatch(
        setError({
          type: ErrorType.API,
          message: 'Failed to complete signup process.',
        }),
      )
    }
  })

  return (
    <Box sx={{
      display: "flex",
      width: "100%",
      flexDirection: "column",
      gap: "16px",
    }}>
      <Box sx={{
        display: "flex",
        gap: "16px",
      }}>
        <CustomInput
          label="First name"
          id="firstName"
          error={false}
        />
        <CustomInput
          label="Last name"
          id="lastName"
          error={false}
        />
      </Box>
      <CustomInput
        label="Email"
        id="email"
        error={false}
        type="email"
        icon={<EmailIcon />}
      />
      <CustomPasswordInput
        label="Password"
        id="password"
        error={false}
        icon={<PasswordIcon />}
      />
      <CustomPasswordInput
        label="Confirm password"
        id="confirmPassword"
        error={false}
        icon={<PasswordIcon />}
      />
      <Button variant="contained" color="primary" sx={{ textTransform: "none" }}>Sign up</Button>
      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
      }}>
        <Typography variant="body1" color="info.main" sx={{ lineHeight: "20px" }}>Already have an account?</Typography>
        <Button variant="text" color="primary" sx={{ height: "20px", textTransform: "none" }}>Sign in</Button>
      </Box>
    </Box>
  )
}

export default SignupForm
