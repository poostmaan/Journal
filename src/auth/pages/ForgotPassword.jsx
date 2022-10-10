import { Email } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const ForgotPassword = () => {
  return (
    <AuthLayout title="Forgot password">
      <Typography>
        Type your email in the textbox below. We will send you an email in order
        to create a new password
      </Typography>
      <Grid item xs={12} sx={{ mt: 2 }}>
        <TextField
          label="Email"
          placeholder="email@email.com"
          type="email"
          fullWidth
          InputProps={{
            endAdornment: <Email />,
          }}
        ></TextField>
      </Grid>
      <Grid item xs={12} sx={{ mt: 2, mb: 3 }}>
        <Button variant="contained" fullWidth sx={{ border: "none" }}>
          Send email
        </Button>
      </Grid>
      <Grid container direction="row" justifyContent="end">
        <Link component={RouterLink} to="/auth/signin">
          {`< Back`}
        </Link>
      </Grid>
    </AuthLayout>
  );
};
