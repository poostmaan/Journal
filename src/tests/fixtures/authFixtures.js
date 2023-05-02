import { statuses } from "../../store/auth/statuses"

export const initialState = { 
    displayName: null,
    email: null, 
    errorMessage: null,
    photoURL: null,
    status: statuses.checking, // checking -- authenticated
    uid: null,
}

export const authenticated = { 
    displayName: "Louis",
    email: "negro@gmail.com", 
    errorMessage: null,
    photoURL: "https://image.com/image.jpg",
    status: statuses.authenticated, // checking -- authenticated
    uid: "123ABC",
}
export const notAuthenticated = { 
    displayName: null,
    email: null, 
    errorMessage: null,
    photoURL: null,
    status: statuses.notAuthenticated, // checking -- authenticated
    uid: null,
}
export const demoUser = { 
    displayName: "Louis",
    email: "negro@gmail.com", 
    photoUrl: "https://image.com/image.jpg",
    uid: "123ABC",
}