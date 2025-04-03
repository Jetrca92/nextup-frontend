import { ChangeEvent, FC, useEffect, useState } from 'react'
import {
  RegisterUserFields,
  useRegisterForm,
} from '../../hooks/useRegister'
import * as API from '../../api/Api'
import { useDispatch, useSelector } from 'react-redux'
import { Controller } from 'react-hook-form'
import { Box, Button, FormControl, FormLabel, Input, Typography } from '@mui/material'
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
import Avatar from '../ui/images/Avatar'

const SignupForm: FC = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { handleSubmit, errors, control } = useRegisterForm()
  const { apiError, fileError, showApiError, showFileError } = useSelector(
    (state: RootState) => state.error,
  )

  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

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

  const onSubmit = handleSubmit(async (data: RegisterUserFields) => {
    if (!file) {
      dispatch(
        setError({ type: ErrorType.FILE, message: 'Please upload an avatar' }),
      )
      return
    }

    try {
      const { confirmPassword, ...signupData } = data
      const signupResponse = await API.signup(signupData, dispatch)
      if (!signupResponse || !signupResponse.data) {
        console.error("Signup response is undefined:", signupResponse);
        dispatch(setError({ type: ErrorType.API, message: "Signup failed. No response received." }));
        return;
      }

      const loginResponse = await API.login(
        {
          email: data.email,
          password: data.password,
        },
        dispatch,
      )

      await uploadUserAvatar(
        loginResponse.data.access_token,
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
          message: `Failed to complete signup process. ${error}`,
        }),
      )
    }
  })

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {/* Form title text */}
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}>
        <Typography variant="h2" color="primary">Hello!</Typography>
        <Typography variant="h4" color="textPrimary" fontWeight={400} sx={{ lineHeight: "30px" }}>Get started with your free account today.</Typography>
      </Box>

      {/* Upload profile picture */}
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
        {preview ? (
          <Avatar imageSrc={preview} />
        ) : (
          <FormControl>
            <FormLabel htmlFor="image" sx={{ cursor: "pointer" }}><Avatar /></FormLabel>
            <Input
              onChange={handleFileChange}
              id="image"
              name="image"
              type="file"
              style={{ display: 'none' }}
            />
          </FormControl>
        )}
        {showFileError && (
          <Typography variant="body2" color="#F04438" sx={{ fontSize: "0.875rem" }}>{fileError}</Typography>
        )}
      </Box>

      {/* Signup form */}
      <Box sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        gap: "16px",
      }}>
        <form onSubmit={onSubmit}>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}>

            <Box sx={{
              display: "flex",
              gap: "16px",
            }}>
              <Controller
                name='firstName'
                control={control}
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    label="First name"
                    id="firstName"
                    error={!!errors.firstName}
                    errorText={errors.firstName?.message}
                  />
                )}
              />
              <Controller
                name='lastName'
                control={control}
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    label="Last name"
                    id="lastName"
                    error={!!errors.lastName}
                    errorText={errors.lastName?.message}
                  />
                )}
              />
            </Box>
            <Controller
              name='email'
              control={control}
              render={({ field }) => (
                <CustomInput
                  {...field}
                  label="Email"
                  id="email"
                  type="email"
                  error={!!errors.email}
                  errorText={errors.email?.message}
                  icon={<EmailIcon />}
                />
              )}
            />
            <Controller
              name='password'
              control={control}
              render={({ field }) => (
                <CustomPasswordInput
                  {...field}
                  label="Password"
                  id="password"
                  error={!!errors.password}
                  errorText={errors.password?.message}
                  icon={<PasswordIcon />}
                />
              )}
            />
            <Controller
              name='confirmPassword'
              control={control}
              render={({ field }) => (
                <CustomPasswordInput
                  {...field}
                  label="Confirm password"
                  id="confirmPassword"
                  error={!!errors.confirmPassword}
                  errorText={errors.confirmPassword?.message}
                  icon={<PasswordIcon />}
                />
              )}
            />
            <Button variant="contained" color="primary" sx={{ textTransform: "none" }} type='submit'>Sign up</Button>
            {showApiError && (
              <Typography variant="body2" color="#F04438" sx={{ fontSize: "0.875rem" }}>{apiError}</Typography>
            )}
            <Box sx={{
              display: "flex",
              justifyContent: "space-between",
            }}>
              <Typography variant="body1" color="info.main" sx={{ lineHeight: "20px" }}>Already have an account?</Typography>
              <Button variant="text" color="primary" sx={{ height: "20px", textTransform: "none" }}>Sign in</Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>

  )
}

export default SignupForm
