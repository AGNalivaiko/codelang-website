export interface User {
  id: string;
  username: string;
  role: string;
  password?: string;
  isLoggedIn?: boolean;
}

export interface UserState {
  user: User | null;
}

export interface UserStats {
  Rating: number;
  Snippets: number;
  Comments: number;
  Likes: number;
  Dislikes: number;
  Questions: number;
  CorrectAnswers: number;
  RegularAnswers: number;
}

export interface UserStatsState {
  userStats: UserStats | null;
}
