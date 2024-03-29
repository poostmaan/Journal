import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout } from "../store/auth";
import { FirebaseAuth } from "../firebase/config";
import { startLoadingNotes } from "../store/journal/thunks";

export const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());

      dispatch(login(user));
      dispatch( startLoadingNotes() )
    //   console.log(user);
    });
  }, []);

  return { status }
};
