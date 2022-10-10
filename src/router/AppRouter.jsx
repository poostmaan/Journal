import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth'
import { JournalRoutes } from '../journal'

export const AppRouter = () => {
  return (
    <Routes> 
        {/* Signin and signup route */}
        <Route path="/auth/*" element={ <AuthRoutes /> } />
        {/* JournalApp appropaterly route*/}
        <Route path="/*" element={ <JournalRoutes />} />
    </Routes>
  )
}
