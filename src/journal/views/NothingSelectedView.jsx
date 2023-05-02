import { Grid, Typography } from '@mui/material';
import { StarOutline } from '@mui/icons-material';


export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: 'calc(100vh - 110px)', borderRadius: 3 }}
    >
        <Grid item xs={ 12 }>
            <StarOutline sx={{ fontSize: 100, color: '#ccc' }} />
        </Grid>
        <Grid item xs={ 12 }>
            <Typography color="#ccc" variant='h5'>Select or <Typography color="primary" variant="span"> create </Typography> a note</Typography>
        </Grid>
    </Grid>
  )
}
