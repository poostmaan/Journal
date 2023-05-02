import { authSlice, checkingCredentials, login, logout } from "../../../store/auth/authSlices"
import { authenticated, demoUser, initialState, notAuthenticated } from "../../fixtures/authFixtures"

describe('Pruebas en el authSlice', () => { 
    test('Debe retornar el estado inicial', () => {

      const state = authSlice.reducer( initialState, {} );
    //   console.log(state)

      expect( state ).toEqual( initialState );
      expect( authSlice.name ).toBe("auth")

    })

    test("Debe mantener el estado autenticado", () => {

        //! Al usar la funcion de login( demoUser )
        // ! Simplemente retorna un objecto
        // {
        //     type: 'auth/login',
        //     payload: {
        //       displayName: 'Louis',
        //       email: 'negro@gmail.com',
        //       photoURL: 'https://image.com/image.jpg',
        //       uid: '123ABC'
        //     }
        //   }
        const state = authSlice.reducer( initialState, login( demoUser ))
        expect( state ).toEqual( authenticated )

    })

    test('Debe realizar el logout sin argumentos', () => {
        const state = authSlice.reducer( authenticated, logout(null) )
        expect( state ).toEqual( notAuthenticated )
    })
    
    test('Debe realizar el logout con alguna excepcion', () => {
      
        const errorMessage = "No marico, tas volado";

        const state = authSlice.reducer( authenticated, logout(errorMessage) )
        expect( state.errorMessage ).toEqual( errorMessage )

    })

    test('Debe cambiar al estado de checking', () => {
      
        const state = authSlice.reducer( authenticated, checkingCredentials() )
        expect(state.status).toBe( "checking" )

    })

    
    
})