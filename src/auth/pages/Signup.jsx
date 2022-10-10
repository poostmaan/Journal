import { Link as RouterLink } from 'react-router-dom' 
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const Signup = () => {
  return (
      <AuthLayout title="Sign up">
        <form>
          <Grid container>

            <Grid item xs={ 12 } sx={{ mt: 2}}>
              <TextField label="Fullname" type="text" placeholder="John doe" fullWidth></TextField>
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2}}>
              <TextField label="Email" type="email" placeholder="email@test.com" fullWidth></TextField>
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2}}>
              <TextField label="Password" type="password" placeholder="1234567" fullWidth></TextField>
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2}}>
              <TextField label="Confirm Password" type="password" placeholder="1234567" fullWidth></TextField>
            </Grid>
          
            <Grid item xs={ 12 } sx={{ mt: 2, mb: 3 }}> 
              <Button variant="contained" fullWidth sx={{ border: 'none'}}>
                Sign up
              </Button>
            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Typography sx={{ mr: 1}}>Already have an account?</Typography>
              <Link component={ RouterLink } to="/auth/signin">
                Sign in here
              </Link>
            </Grid>
          </Grid>

        </form>
      </AuthLayout>
  )
}

