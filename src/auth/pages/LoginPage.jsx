import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";

import {
  checkingAuthentication,
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";

const initialForm = {
  email: "",
  password: "",
}

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);

  // const check = checkingAuthentication(); 
  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm(initialForm);

  const isAuthenticated = useMemo(() => status === "checking", [status]);

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="email"
              type="email"
              placeholder="email@email.com"
              fullWidth
              name="email"
              // value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="password"
              type="password"
              placeholder="123***"
              fullWidth
              name="password"
              // value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sx={{ mt: 2 }}
            // Transofma el nulo en boolean y lo validas para presentar el alert
            display={!!errorMessage ? "" : "none"}
          >
            <Alert severity="error">{errorMessage}</Alert>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticated}
                type="submit"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticated}
                onClick={onGoogleSignIn}
                variant="contained"
                fullWidth
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Create a account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
