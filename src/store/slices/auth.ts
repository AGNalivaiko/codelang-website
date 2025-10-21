import { createSlice } from '@reduxjs/toolkit';

interface User {
  id: number;
  username: string;
  role: string;
  password: string;
}

interface UserState {
  user: User | null;
}

const savedUser = localStorage.getItem('user');
const initialState: UserState = {
  user: savedUser ? JSON.parse(savedUser) : null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    }
  }
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
