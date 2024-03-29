// Una accion asincrona que se podra disparar

import { loginWithEmailPassword, logoutGoogle, registerUserWithEmailAndPassword, signInWithGoogle } from "../../firebase/providers";
import { logoutDeleteNotes } from "../journal/journalSlice";
import { checkingCredentials, login, logout } from "./authSlices"

// AL FINAL DEL DIA NUESTROS THUNKS DESARROLLAN ACCIONES SINCRONAS QUE IMPACTAN NUESTRO STORE

export const checkingAuthentication = ( email, password ) => {
    return async(dispatch) => {
        dispatch( checkingCredentials() );
    }
}

export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch( checkingCredentials() );
        const res = await signInWithGoogle();

        if( !res.ok ) return dispatch( logout( res.errorMessage ) );

        dispatch( login( res ) );
        // console.log(res)
    }
}

export const startCreatingUserWithEmailPassword = ({ displayName, email, password}) => {
    
    return async ( dispatch ) => {
        
        // Dejar claro a nuestro store que estamos revisando datos
        dispatch( checkingCredentials() );
        const res = await registerUserWithEmailAndPassword({ displayName, email, password});
        const { ok, errorMessage } = res;

        if( !ok ) return dispatch( logout( errorMessage ));

        dispatch( login( res ) ); 

        // console.log(res); 
// 
    }

}

export const startLoginWithEmailPassword = ({ email, password }) => {

    return async( dispatch ) => {

        dispatch( checkingCredentials() );
        const res = await loginWithEmailPassword({ email, password })
        const { ok, errorMessage } = res; 

        if( !ok ) return dispatch( logout( errorMessage ));

        dispatch( login( res ) ); 

    }
    
}

export const startLogout = () => {
    return async( dispatch ) => {

        try {
            await logoutGoogle();
            dispatch( logoutDeleteNotes() )

            dispatch( logout() );
        } catch (error) {
            console.log(error)
        }

    }
}
