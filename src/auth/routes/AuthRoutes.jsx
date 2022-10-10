import { Navigate, Route, Routes } from "react-router-dom"
import { Signin, Signup } from "../pages"

export const AuthRoutes = () => {
  return (
    <Routes> 
      <Route path="/signin" element={ <Signin /> }></Route>
      <Route path="/signup" element={ <Signup /> }></Route>
      <Route path="/*" element={ <Navigate to="/auth/signin" /> }></Route>
    </Routes>
  )
}
