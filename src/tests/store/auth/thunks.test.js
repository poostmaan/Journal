import {
  loginWithEmailPassword,
  logoutGoogle,
  registerUserWithEmailAndPassword,
  signInWithGoogle,
} from "../../../firebase/providers";
import {
  checkingCredentials,
  login,
  logout,
} from "../../../store/auth/authSlices";
import {
  checkingAuthentication,
  startCreatingUserWithEmailPassword,
  startGoogleSignIn,
  startLoginWithEmailPassword,
  startLogout,
} from "../../../store/auth/thunks";
import { logoutDeleteNotes } from "../../../store/journal/journalSlice";
import { demoUser } from "../../fixtures/authFixtures";

// Hacer un mock completo a todos las exportaciones que este haciendo el archivo
jest.mock("../../../firebase/providers");

describe("Pruebas en el auth thunk", () => {
  // Mi accion que espera ser disparada en cada accion
  // Ejecutamos la funcion jest function para validar que haya sido validado
  // con ciertos argumentos
  const dispatch = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("Debe de llamar a la funcion checkingAuthentication", async () => {
    await checkingAuthentication()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });

  test("startGoogleSignIn debe llamar CheckingCredentials y login - Exito", async () => {
    const loginData = { ok: true, ...demoUser };
    // A este punto el signInWithGoogle ya es un mock

    // Cuando resuelva el componente regresa la data que estableci
    await signInWithGoogle.mockResolvedValue(loginData);

    // Esto te retorna una function que con el argument disptach lo que haces es llamarla
    // Con ese parametro que es un jest function
    await startGoogleSignIn()(dispatch);

    // Ensure that a mock function was called with a specified value
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test("startGoogleSignIn debe llamar CheckingCredentials y logout - Error", async () => {
    const loginData = { ok: false, errorMessage: "Algo salio mal" };

    await signInWithGoogle.mockResolvedValue(loginData);
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout("Algo salio mal"));
  });

  test("startLoginWithEmailPassword debe de llamar checkingCredentials y login - Exito", async () => {
    const loginData = { ok: true, ...demoUser };
    const formData = { email: demoUser.email, password: "123456" };

    await loginWithEmailPassword.mockResolvedValue(loginData);
    await startLoginWithEmailPassword(formData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test("startLogout debe de llamar al logoutGoogle, logoutDeleteNotes, logout", async () => {
    await startLogout()(dispatch);

    expect(logoutGoogle).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(logoutDeleteNotes());
    expect(dispatch).toHaveBeenCalledWith(logout());
  });

  // TODO: startCreatingUserWithEmailPassword

  test("startCreatingUserWithEmailPassword debe de llamar login despues de registrar ", async () => {
    const formData = {
      displayName: demoUser.displayName,
      email: demoUser.email,
      password: "123456",
    };

    const registerData = {
        ok: true,
        ...demoUser
    }

    await registerUserWithEmailAndPassword.mockResolvedValue(registerData);
    await startCreatingUserWithEmailPassword(formData)(dispatch);

    expect(dispatch ).toHaveBeenCalledWith( checkingCredentials() );
    expect(dispatch ).toHaveBeenCalledWith( login( registerData ) );
    
  });
});
