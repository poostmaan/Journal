import { Navigate, Route, Routes } from 'react-router-dom';

import { statuses } from '../store/auth/statuses';

import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { CheckingAuth } from '../ui';
import { useCheckAuth } from '../hooks/useCheckAuth';


export const AppRouter = () => {

  const { status } = useCheckAuth();  

  if( status === statuses.checking) return <CheckingAuth />

  return (
    <Routes location="/Journal">

        {
          status === statuses.authenticated
          ? <Route path="/*" element={ <JournalRoutes /> } />
          : <Route path="/auth/*" element={ <AuthRoutes /> } />
        }

        <Route path="/*" element={ <Navigate to="auth/login" /> } />
        
    </Routes>
  )
}
