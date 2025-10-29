export interface NewUser {
  username: string;
  password: string;
}

export type FieldType = {
  username: string;
  password: string;
  confirmPassword: string;
  remember?: string;
};
