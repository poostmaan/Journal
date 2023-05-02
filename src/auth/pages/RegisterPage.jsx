import { useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';

import { AuthLayout } from '../layout/AuthLayout'; 
import { useForm } from '../../hooks/useForm';
import { startCreatingUserWithEmailPassword } from '../../store/auth';

const formData = {
  displayName: "",
  email: "",
  password: "",
}

const formValidations = {
  // Validaciones para que muestre error en el false
  displayName: [ (value) => value.length >= 1, 'Must fill this field'],
  email: [ (value) => value.includes('@'), 'The email must contain a @' ],
  password: [ (value) => value.length >= 6, 'The password must be at least 6 characters ' ],
}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector(state => state.auth);
  const registrationIsRunning = useMemo(() => status === "checking", [status]);

  const [formSubmitted, setFormSubmitted] = useState(false);

  const { 
    formState, displayName, email, password, onInputChange,  
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm( formData, formValidations );
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted( true );
    console.log('1')
    console.log(isFormValid)
    // si no es valido no hagas nada
    if( !isFormValid ) return; 

    dispatch( startCreatingUserWithEmailPassword( formState ) );
    // console.log( formState )
  }

  return (
    <AuthLayout title="Create account">
      {/* <h2>{ isFormValid ? 'Es valido' : 'No es valido' }</h2> */}
      <form onSubmit={ handleSubmit } className="animate__animated animate__fadeIn animate__faster">
          <Grid container>
           
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Full name" 
                type="text" 
                placeholder='Full name' 
                fullWidth
                name="displayName"
                value={ displayName }
                onChange={ onInputChange }
                error={ !!displayNameValid && formSubmitted} 
                helperText={ formSubmitted && displayNameValid }
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Email" 
                type="email" 
                placeholder='email@email.com' 
                fullWidth
                name="email"
                value={ email }
                onChange={ onInputChange }
                error={ !!emailValid && formSubmitted }
                helperText={ formSubmitted && emailValid }
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="password" 
                type="password" 
                placeholder='123***' 
                fullWidth
                name="password"
                value={ password }
                onChange={ onInputChange }
                error={ !!passwordValid && formSubmitted}
                helperText={ formSubmitted && passwordValid } 
              />
            </Grid>
            
            <Grid 
              item xs={ 12 } sx={{ mt: 2 }}
              // Transofma el nulo en boolean y lo validas para presentar el alert
              display={ !!errorMessage ? '' : 'none' }
            >
              <Alert severity="error">
                {errorMessage}
              </Alert>
              
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 }>
                <Button 
                  type="submit"
                  variant='contained'  
                  disabled={registrationIsRunning}
                  fullWidth
                >
                  Create account
                </Button>
              </Grid>
            </Grid>


            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{ mr: 1 }}>already have an account?</Typography>
              <Link component={ RouterLink } color='inherit' to="/auth/login">
                Login now
              </Link>
            </Grid>

          </Grid>


        </form>

    </AuthLayout>
  )
}
