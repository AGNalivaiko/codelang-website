import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { User, UserState } from './types';

const registredUser = localStorage.getItem('user');
const parsedUser = registredUser ? JSON.parse(registredUser) : null;

const initialState: UserState = {
  user: parsedUser ? { ...parsedUser, isLoggedIn: true } : null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
      localStorage.removeItem('user');
      localStorage.removeItem('password');
    },
    logout: (state) => {
      if (state.user) {
        state.user.isLoggedIn = false;
      }
    }
  }
});

export const { setUser, clearUser, logout } = userSlice.actions;

export default userSlice.reducer;
