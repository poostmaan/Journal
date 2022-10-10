import { TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'

export const ForgotPassword = () => {
  return (
    <AuthLayout title="Forgot password">
        <Typography>Type your email in the textbox below. We will send a email to you to create a new password</Typography>
        <Grid item sx={12}>
            <TextField label="Email" placeholder="email@email.com" type="email" fullWidth></TextField>
        </Grid>
    </AuthLayout>
  )
}
