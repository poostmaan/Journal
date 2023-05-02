import { AppBar, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth/thunks';


export const NavBar = ({ drawerWidth = 240 }) => {

  const dispatch = useDispatch();

  const onLogout = () => {

    dispatch( startLogout() );
  }
  return (
    <AppBar 
        position='fixed'
        sx={{ 
            width: { sm: `calc(100% - ${ drawerWidth }px)` }, 
            ml: { sm: `${ drawerWidth }px` }
         }}
    >
        <Toolbar>
            <IconButton
                color='inherit'
                edge="start"
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuOutlined />
            </IconButton>

            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant='h6' noWrap component='div'> JournalApp </Typography>

                <Button onClick={ onLogout } 
                    sx={{ color: "#fff"}}
                >
                    <LogoutOutlined /> 
                    <Typography noWrap component='div'>Sign out</Typography>
                </Button> 

            </Grid>
 
        </Toolbar> 
    </AppBar>
  )
}
