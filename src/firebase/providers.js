import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";


const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {

    try {
        
        const result = await signInWithPopup( FirebaseAuth, googleProvider );
        // const credentials = GoogleAuthProvider.credentialFromResult( result );
        // credentialFromResult solo retorna un objecto con las credenciales
        // El token devuelto podria ayudar a realizar peticiones directo contra google
        const { displayName, photoURL, uid, email, accessToken} = result.user;

        return {
            ok: true,
            displayName, photoURL, uid, email, accessToken
        }

    } catch (error) {
        const errorMessage = error.message;
        const errorCode = error.code;
        
        return {
            ok: false,
            errorCode, errorMessage
        } 

    }

}

export const registerUserWithEmailAndPassword = async({ displayName, email, password}) => {
    
    try { 
        
        const res = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL, accessToken } = res.user;
        console.log(res)

        await updateProfile( FirebaseAuth.currentUser, { displayName }) 

        return { 
            ok: true,
            displayName, photoURL, uid, accessToken
        }

    } catch (error) {
        // TODO: Validaciones de errores
        const errorMessage = error.message;
        const errorCode = error.code;
        
        return {
            ok: false,
            errorCode, errorMessage
        } 
    }

}

export const loginWithEmailPassword = async ({ email, password} ) => {
    try {

        const res = await signInWithEmailAndPassword( FirebaseAuth, email, password);
        const { uid, photoURL, displayName, accessToken } = res.user;
        // console.log(res);
        return { 
            ok: true,
            displayName, photoURL, uid, accessToken, email
        }
        
    } catch (error) {
        // TODO: Validaciones de errores
        const errorMessage = error.message;
        const errorCode = error.code;
        
        return {
            ok: false,
            errorCode, errorMessage
        } 
    }
}

export const logoutGoogle = async() => {
    // Esta funcion cierra cualquier sesion que este abierta
    // * sea google, facebook, microsoft... lo que sea
    return await FirebaseAuth.signOut();
}