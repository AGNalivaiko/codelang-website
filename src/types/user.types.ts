export interface User {
  id: string;
  username: string;
  role: string;
}
export interface CreateUserDto {
  username: string;
  password: string;
}

export interface RegistredUserDto {
  username: string;
  password: string;
}
