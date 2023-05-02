import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    messageSaved: "", // Conocer el ultimo mensaje guardao
    notes: [], // Arreglo con las notas
    active: null,
    // active: { // La ultima nota cargada
    //     id: '83fhn8c25x5ynn8t0dy8m0492r4m8x1nn846380c13brxn034xr43',
    //     title: 'nothig here',
    //     body: 'here neither',
    //     date: 12231123,
    //     imageUrls: [] // Todas las imagenes que se han cargado
    // }
  },
  reducers: {
    // TODOS LOS REDUCERS DEBEN HACER TRABAJO SINCRONO, FUNCIONES PURAS
    creatingNote: (state) => {
      state.isSaving = true;
    },
    getNotes: (state /* action */) => {
      state.value += 1;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      // * Hacer notar la nota que esta seleccionada
      state.active = action.payload;
      // state.active = { ...state.active, ...action.payload }
      state.messageSaved = "";
    },
    setNotes: (state, action) => {
      // * Establecer las notas
      state.notes = action.payload;
    },
    setSavings: (state) => {
      // * Declarar en el state que estamos guardano la nota
      state.isSaving = true;
      state.messageSaved = "";
    },
    updateNote: (state, action) => {
      // * Actualizar una nota
      // ! LOS REDUCERS NO DEBEN TENER HOOKS
      // ! DEBE RESOLVERSE INTERNAMENTE SI USAR NADA POR FUERA
      // * funcion pura
      state.isSaving = false;

      const index = state.notes.findIndex((e) => e.id == action.payload.id);
      state.notes[index] = action.payload;

      state.messageSaved = `${action.payload.title}, actualizado`;
    },
    setPhotosToActiveNote: (state, action) => {
      state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
      state.isSaving = false;
    },
    logoutDeleteNotes: ( state ) => {
      state.active = false;
      state.messageSaved = "";
      state.notes = [];
      state.active = null;
    },
    deleteNoteByID: (state, action) => {
      // * Actualizar una nota
      state.active = null
      state.notes = state.notes.filter( note => note.id !== action.payload.id ) 
    },
  },
});

export const {
  addNewEmptyNote,
  creatingNote,
  deleteNoteByID,
  setActiveNote,
  setNotes,
  setPhotosToActiveNote,
  setSavings,
  updateNote,
  logoutDeleteNotes
} = journalSlice.actions;
