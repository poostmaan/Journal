import { Link as RouterLink } from 'react-router-dom'
import { Facebook, GitHub, Google, Pinterest } from '@mui/icons-material'
import { Button, Grid, Link, TextField } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const Signin = () => {
  return (
      <AuthLayout title="Sign in">
        <form>
          <Grid container>
            <Grid item xs={ 12 } sx={{ mt: 2}}>
              <TextField label="Email" type="email" placeholder="email@test.com" fullWidth></TextField>
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2}}>
              <TextField label="Password" type="password" placeholder="1234567" fullWidth></TextField>
            </Grid>
          
            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 3}}>
              <Grid item xs={ 12 } sm={ 6 }>
                  <Link component={ RouterLink } to="/auth/forgot">
                    <Button variant="contained" fullWidth sx={{ border: 'none', backgroundColor: 'secondary.main'}}>
                        Forgot password
                    </Button>
                  </Link>
              </Grid>

              <Grid item xs={ 12 } sm={ 6 }> 
                <Button variant="contained" fullWidth sx={{ border: 'none'}}>
                  Sign in
                </Button>
              </Grid>
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 3}}>
              <Grid item xs={ 6 } sm={ 3 }>
                <Button variant="outlined" fullWidth>
                  <Google /> 
                </Button>
              </Grid>

              <Grid item xs={ 6 } sm={ 3 }> 
                <Button variant="outlined" fullWidth> 
                  <Facebook />
                </Button>
              </Grid>

              <Grid item xs={ 6 } sm={ 3 }> 
                <Button variant="outlined" fullWidth> 
                  <GitHub />
                </Button>
              </Grid>

              <Grid item xs={ 6 } sm={ 3 }> 
                <Button variant="outlined" fullWidth> 
                  <Pinterest />
                </Button>
              </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Link component={ RouterLink } to="/auth/signup">
                Sign up for free
              </Link>
            </Grid>
          </Grid>

        </form>
      </AuthLayout>
  )
}
