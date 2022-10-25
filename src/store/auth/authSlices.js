import { createSlice } from '@reduxjs/toolkit';
import { statuses } from './statuses';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        displayName: null,
        email: null, 
        errorMessage: null,
        photoURL: null,
        status: statuses.checking, // checking -- authenticated
        uid: null,
    },
    reducers: {
        login: ( state, { payload } ) => {
            state.displayName = payload.displayName
            state.email = payload.email 
            state.errorMessage = null
            state.photoURL = payload.photoURL
            state.status = statuses.authenticated
            state.uid = payload.uid
        },
        logout: ( state, { payload }) => {   
            state.errorMessage = payload;
            state.status = statuses.notAuthenticated;
        },
        checkingCredentials: ( state ) => {
            state.errorMessage = null
            state.status = statuses.checking 
        },
    }
});
// ActionCreatorFunctions
// funciones que nosotros llamamos y ya estan vinculadas a las acciones del reducer
export const { login, logout, checkingCredentials } = authSlice.actions; 