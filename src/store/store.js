import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { journalSlice } from './journal'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    journal: journalSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ 
    // Me tiraba error por non-serealized variables
    // https://stackoverflow.com/questions/61704805/getting-an-error-a-non-serializable-value-was-detected-in-the-state-when-using
    serializableCheck: false,
  })
})