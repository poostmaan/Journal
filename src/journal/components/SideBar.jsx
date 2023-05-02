import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { Add, PlusOne, TurnedInNot } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { SideBarItem } from './SideBarItem';
import { setActiveNote } from '../../store/journal/journalSlice';
import { startNewNote } from '../../store/journal/thunks';

export const SideBar = ({ drawerWidth = 240 }) => {

  const { displayName } = useSelector( state => state.auth);
  const { notes, isSaving, active } = useSelector( state => state.journal);

  const dispatch = useDispatch();
  const onClickNewNote = () => {
    dispatch( startNewNote() );
  }

  return (
    <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
        <Drawer
            variant='permanent' // temporary
            open
            sx={{ 
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, zIndex: 1000, backgroundColor: "#051e34" }
            }}
        >
            <Toolbar>
                <Typography variant='h6' noWrap component='div' color="white">
                    { displayName }
                </Typography>
            </Toolbar>
            <Divider />

            <List sx={{ mt: 0, color: 'white' }}>
                
                <ListItem disablePadding sx={{ backgroundColor: "#122c44"}}> 
                    <ListItemButton onClick={ onClickNewNote } disabled={isSaving}> 
                        <ListItemIcon>
                            <Add style={{ color: 'white' }} />
                        </ListItemIcon>
                        <Grid container>
                        <ListItemText primary="Add new entry" />
                        </Grid>
                    </ListItemButton>
                </ListItem>

                {
                    notes.map( note => (
                       <SideBarItem key={ note.id } { ...note } active={active}/>
                    ))
                }
            </List>

        </Drawer>

    </Box>
  )
}
