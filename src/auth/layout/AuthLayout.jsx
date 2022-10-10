import { Grid, Typography } from '@mui/material';

export const AuthLayout = ({ children, title }) => {
  return (
    <Grid
      container
      spacing={ 0 }
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main'}}
    >
      <Grid 
        item
        xs={ 3 }
        sx={{ width: { md: 450 }, backgroundColor: 'white', padding: 4 }}
      >
        <Typography variant="h4" sx={{ mb: 2}}> { title } </Typography>

        { children }
      </Grid>
    </Grid>
  )
}
