import { createSlice } from '@reduxjs/toolkit';
import type { UserStatsState } from './types';

const initialState: UserStatsState = {
  userStats: {
    Rating: 0,
    Snippets: 0,
    Comments: 0,
    Likes: 0,
    Dislikes: 0,
    Questions: 0,
    CorrectAnswers: 0,
    RegularAnswers: 0
  }
};

const statsSlice = createSlice({
  name: 'userStats',
  initialState,
  reducers: {
    setStats: (state, action) => {
      state.userStats = action.payload;
    },
    clearStats: (state) => {
      state.userStats = null;
    }
  }
});

export const { setStats, clearStats } = statsSlice.actions;
export default statsSlice.reducer;
