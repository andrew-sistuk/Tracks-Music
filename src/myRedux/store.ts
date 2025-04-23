import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  // persistReducer,
  // persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { useDispatch } from 'react-redux';

// import storage from 'redux-persist/lib/storage';

import tracksSlice from './tracks/slice';

export const appState = configureStore({
  reducer: {
    tracks: tracksSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type AppDispatch = typeof appState.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export type RootState = ReturnType<typeof appState.getState>


// export const persistor = persistStore(appState);