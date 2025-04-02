import { FC, useEffect } from 'react'
import * as API from '../../api/Api'
import { useDispatch, useSelector } from 'react-redux'
import { Controller } from 'react-hook-form'
import { Box, Button, Typography } from '@mui/material'
import CustomInput from '../inputs/CustomInput'
import EmailIcon from '../ui/icons/EmailIcon'
import CustomPasswordInput from '../inputs/CustomPasswordInput'
import PasswordIcon from '../ui/icons/PasswordIcon'
import { useRouter } from 'next/navigation'
import { routes } from '@/constants/routesContants'
import { RootState } from '@/store/store'
import { clearAllErrors, setError } from '@/store/errorSlice'
import { ErrorType } from '@/constants/errorConstants'
import { login } from '@/store/authSlice'
import FacebookButton from '../ui/buttons/FacebookButton'
import GoogleButton from '../ui/buttons/GoogleButton'
import { LoginUserFields, useLoginForm } from '@/hooks/useLogin'

const LoginForm: FC = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { handleSubmit, errors, control } = useLoginForm()
  const { apiError, showApiError } = useSelector(
    (state: RootState) => state.error,
  )

  useEffect(() => {
    dispatch(clearAllErrors())
  }, [dispatch])

  const onSubmit = handleSubmit(async (data: LoginUserFields) => {
    const loginResponse = await API.login(data, dispatch)
    try {
      const user = await API.fetchUser(loginResponse.data.access_token)
      dispatch(login({ user, token: loginResponse.data.access_token }))
      router.push(routes.HOME)
    } catch (error) {
      dispatch(
        setError({
          type: ErrorType.API,
          message: 'Failed to fetch user information.',
        }),
        console.log(error)
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
        <Typography variant="h2" color="primary">Wellcome back!</Typography>
        <Typography variant="h4" color="textPrimary" fontWeight={400} sx={{ lineHeight: "30px" }}>We are glad that you are back.</Typography>
      </Box>

      {/* Login form */}
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
            <Button variant="contained" color="primary" sx={{ textTransform: "none" }} type='submit'>Login</Button>
            {showApiError && (
              <Typography variant="body2" color="#F04438" sx={{ fontSize: "0.875rem" }}>{apiError}</Typography>
            )}
            <FacebookButton />
            <GoogleButton />
          </Box>
        </form>
      </Box>
      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
      }}>
        <Typography variant="body1" color="info.main" sx={{ lineHeight: "20px" }}>Don’t have an account yet?</Typography>
        <Button variant="text" color="primary" sx={{ height: "20px", textTransform: "none" }}>Sign up</Button>
      </Box>
    </Box>


  )
}

export default LoginForm


