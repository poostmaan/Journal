import { Navigate, Route, Routes } from "react-router-dom"
import { JournalApp } from "../pages";

export const JournalRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <JournalApp /> } ></Route>
        <Route path="/*" element={ <Navigate to="/" />} ></Route>
    </Routes>
  )
}
