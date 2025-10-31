export interface User {
  id: string;
  username: string;
  role: string;
  password?: string;
}
export interface NewUser {
  username: string;
  password: string;
}
