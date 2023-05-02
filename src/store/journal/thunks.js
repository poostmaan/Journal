import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { loadNotes } from "./helpers/loadNotes";
import { uploadNote } from "./helpers/uploadNote";
import { addNewEmptyNote, creatingNote, deleteNoteByID, setActiveNote, setNotes, setPhotosToActiveNote, setSavings, updateNote } from "./journalSlice";

// NUESTRO THUNKS TIENEN ACCESO A NUESTRO STORE

function getUid( authState ) {
    return authState.auth.uid;
}

export const startNewNote = () => {
    return async ( dispatch, getState ) => {
        // Cambia el estado de la app a creando
        dispatch( creatingNote() )
        const uid = getUid( getState() );
        // console.log("here")
        // Obtener uid

        // console.log( getState() )
        

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            imageUrls: []
        }

        const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notes`) )

        try {
            const setDocRes = await setDoc( newDoc, newNote );
            newNote.id = newDoc.id

            dispatch( addNewEmptyNote( newNote ) )
            dispatch( setActiveNote( newNote ) )
        } catch(e) {
            console.log(e)
        }


        // ! dispatch
        // dispatch ( addNote )
        // dispatch ( activeNote )

    }
}

export const startLoadingNotes = () => {
    return async ( dispatch, getState ) => {
        const uid = getUid( getState() );
        console.log({uid})

        const notes = await loadNotes( uid );
        dispatch( setNotes( notes ) )
    }
}


export const startSaveNote = () => {
    return async ( dispatch, getState ) => {

        dispatch( setSavings() );

        const uid = getUid( getState() );
        const { active: note } = getState().journal;
        const optionsFirestore = {
            merge: true, // ESTABLECE UNIR LOS CAMPOS QUE ESTEN ARRIBA CON NUEVOS
        } 

        // ESPARCIMOS LAS PROPIEDADES DEL OBJETO NOTA
        // Y REMOVEMOS EL ID PARA EVITAR CONFLICTOS CON FIRESTORE
        const noteToFireStore = { ...note };
        delete noteToFireStore.id;

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }` );
        await setDoc( docRef, noteToFireStore, { merge: true } );

        dispatch( updateNote( note ) );
        console.log( noteToFireStore );
        // dispatch(  action )
    }
}


export const startUploadingNotes = ( files = [] ) => {
    return async ( dispatch, getState ) => {
        dispatch( setSavings() )        

        // console.log(await uploadNote( files[0] ))

        const filesToBeUploaded = [];
        for (const file of files) {
            filesToBeUploaded.push( uploadNote( file ) )
        }

        const photosUploaded = await Promise.all( filesToBeUploaded )
        dispatch( setPhotosToActiveNote( photosUploaded ) )
        console.log( photosUploaded )
        
        // dispatch( action )
    }
}


export const startDeletingNote = () => {
    return async ( dispatch, getState ) => {
        const uid = getUid( getState() );
        const {active: note} = getState().journal

        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }` );
        await deleteDoc( docRef )

        dispatch( deleteNoteByID( note ) )
    }
}


