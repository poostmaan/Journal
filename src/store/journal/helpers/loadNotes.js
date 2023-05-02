import { collection, getDocs } from "firebase/firestore/lite"
import { FirebaseDB} from '../../../firebase/config'

export const loadNotes = async ( uid = '' ) => {

    if( !uid ) throw new Error("El uid no existe")

    const collectionRef = collection( FirebaseDB, `${ uid }/journal/notes` )
    // ! CON LA FUNCION DOCS RETORNAS UNA REFERENCIA EN CRUDO DE LA COLECCION EN FIRESTORE
    // ! SI DESEAS TENER LOS DATOS USA  data()
    const notesDocs = await getDocs( collectionRef );

    const notes = [];
    
    notesDocs.forEach( note => {
        notes.push({ id: note.id, ...note.data() })
    })

    return notes;

}