import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filterSlice";
import { contactsApi } from "./operations";
import { authReducer } from "./auth/slice";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
}

const middleware = (getDefaultMiddleware) => getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
});

const persistedAuthReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    auth: persistedAuthReducer
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
})

export const persistor = persistStore(store)