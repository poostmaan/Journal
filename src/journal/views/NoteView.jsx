import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Divider, Grid, IconButton, Input, TextField, Typography } from "@mui/material";
import { SaveOutlined, UploadOutlined } from "@mui/icons-material";
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

import { useForm } from "../../hooks/useForm";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startDeletingNote, startSaveNote, startUploadingNotes } from "../../store/journal/thunks";
import { ImageGallery } from "../components";

export const NoteView = () => {
  const dispatch = useDispatch();

  const fileInputRef = useRef();

  const {
    active: note,
    messageSaved,
    isSaving,
  } = useSelector((state) => state.journal);

  const { title, body, date, imageUrls, onInputChange, formState } = useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  useEffect(() => {
    // VAMOS A IR GUARDANDO CUALQUIER CAMBIO DE LA NOTA ACTIVO EN EL STORE
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire("Note updated", messageSaved, "success");
    }
  }, [messageSaved]);

  const onSaveNote = () => {
    dispatch(startSaveNote());
  };

  const onFileInputChange = ({ target }) => {
    console.log( target.files)

    if( target.files === 0 ) return;

    dispatch( startUploadingNotes( target.files ) ); 
  }

  const onDelete = () => {
    dispatch( startDeletingNote() )
  }

  return (

    <>
      <Box sx={{
        position: "fixed",
        bottom: "25px",
        right: "25px"
      }} >

        <Button
          onClick={ onDelete }
          variant="contained"
          color='error'
        >
          <DeleteIcon /> 
          Delete
        </Button>

        <Button
          disabled={isSaving}
          onClick={onSaveNote}
          color="primary"
        >
          <SaveOutlined sx={{ mr: 1 }} />
          Save
        </Button>
        
      </Box>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 1, px: 4 }}
      >

        <Grid item>
          <Typography fontSize={39} fontWeight="light">
            {dateString}
          </Typography>
        </Grid>
        <Grid item>
          <input 
            type="file" 
            multiple 
            onChange={ onFileInputChange }
            ref={ fileInputRef }
            style={{ display:"none" }}
          />

        
        </Grid>

        <Grid container>
          <TextField
            type="text"
            variant="standard"
            fullWidth
            placeholder="Type a title"
            sx={{ border: "none", mb: 2 }}
            name="title"
            value={title}
            onChange={onInputChange}
          />

          <TextField
            type="text"
            variant="standard"
            fullWidth
            multiline
            placeholder="What are you thinking?"
            minRows={5}
            name="body"
            value={body}
            onChange={onInputChange}
          />
        </Grid>


        <ImageGallery 
          images={ imageUrls } 
          disabled={ isSaving }
          saveImage={ () => { fileInputRef.current.click() } } 
        />

        <Grid container justifyContent="end" sx={{ display: "sticky" }}>

          
        </Grid>
          

      </Grid>
    </>

  );
};
