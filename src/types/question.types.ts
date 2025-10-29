import type { User } from './user.types';

export interface Question {
  answers: unknown[];
  attachedCode: string;
  description: string;
  id: string;
  isResolved: boolean;
  title: string;
  user: User;
}
