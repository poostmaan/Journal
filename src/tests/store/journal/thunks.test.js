import { collection, deleteDoc, getDoc, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../../../firebase/config";
import { addNewEmptyNote, creatingNote, setActiveNote } from "../../../store/journal/journalSlice";
import { startNewNote } from "../../../store/journal/thunks";

describe('Pruebas en el Journal thunks', () => {

    const getState = jest.fn();
    const dispatch = jest.fn();

    beforeEach(() => jest.clearAllMocks() )
  
    test('startNewNote debe crear una nueva nota vacia ', async() => {
      
        const uid = "T0029LPA231";

        getState.mockReturnValue({ auth: { uid: uid }})

        await startNewNote()( dispatch, getState );

        expect( dispatch ).toHaveBeenCalledWith( creatingNote() );

        expect( dispatch ).toHaveBeenCalledWith( addNewEmptyNote({ 
            body: '',
            title: '',
            id: expect.any( String ),
            date: expect.any( Number ),
            imageUrls: [],
        }))

        expect( dispatch ).toHaveBeenCalledWith( setActiveNote({
            body: '',
            title: '',
            id: expect.any( String ),
            date: expect.any( Number ),
            imageUrls: [],
        }))

        const promisesArr = [];
        const collectionRef = collection( FirebaseDB, `${ uid }/journal/notes` )
        const notes = await getDocs( collectionRef );

        notes.forEach(note => {
            promisesArr.push( deleteDoc(note.ref) );
        })

        await Promise.all( promisesArr )

        // const collectionRef = collection( FirebaseDB, `${ uid }/journal/notes` );
        // const notes = getDocs( collectionRef );


    })
    

})
