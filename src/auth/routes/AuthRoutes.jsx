import { Navigate, Route, Routes } from "react-router-dom"
import { Signin, Signup } from "../pages"
import { ForgotPassword } from "../pages/ForgotPassword"

export const AuthRoutes = () => {
  return (
    <Routes> 
      <Route path="/signin" element={ <Signin /> }></Route>
      <Route path="/signup" element={ <Signup /> }></Route>
      <Route path="/forgot" element={ <ForgotPassword /> }></Route>
      <Route path="/*" element={ <Navigate to="/auth/signin" /> }></Route>
    </Routes>
  )
}
