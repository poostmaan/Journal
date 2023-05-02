import { TurnedInNot } from "@mui/icons-material";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";

function cutString(text, cutlength = 17) {
  return text.length > cutlength ? text.substring(0, cutlength) + "..." : text;
}

export const SideBarItem = ({ id, title, body, date, imageUrls = [], active }) => {

  const newTitle = useMemo(() => cutString(title), [title]);
  const newBody = useMemo(() => cutString(body), [body]);

  const dispatch = useDispatch();

  const handleClickOnNote = (e) => {
    dispatch(setActiveNote({ id, title, body, date, imageUrls }));
  };

  const activeNote = active === null ? false : id == active.id ? true : false;

  console.log(activeNote)

  return (
    <ListItem disablePadding sx={{ backgroundColor: activeNote && "primary.main"}} >
      <ListItemButton onClick={handleClickOnNote}>
        <ListItemIcon>
          <TurnedInNot style={{ color: "white" }} />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText
            // sx={{ color: "#ffffff80 !important" }}
            secondary={
              <Typography variant="body2" style={{ color: "#ffffff80" }}>
                {newBody}
              </Typography>
            }
          />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
