import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/auth';
import statsReducer from './slices/statsUser';

export const store = configureStore({
  reducer: {
    user: userReducer,
    stats: statsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
