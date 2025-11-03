import type { User } from './user.types';

export interface LoginResponse {
  data: User;
  message: string;
}
