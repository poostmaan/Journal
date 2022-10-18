import { createSlice } from '@reduxjs/toolkit';
import { statuses } from './statuses';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        displayName: null,
        email: null, 
        errorMessage: null,
        photoURL: null,
        status: statuses.notAuthenticated, // checking -- authenticated
        uid: null,
    },
    reducers: {
        login: ( state, action ) => {
            state.value += 1;
        },
        logout: ( state, payload ) => {
            state.value += 1;
        },
        checkingCredentials: ( state ) => {
            state.value += 1;
        },
    }
});
// ActionCreatorFunctions
// funciones que nosotros llamamos y ya estan vinculadas a las acciones del reducer
export const { login, logout, checkingCredentials } = authSlice.actions; 