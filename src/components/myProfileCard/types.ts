import type { MouseEventHandler } from 'react';

interface User {
  id: number;
  username: string;
  role: string;
  password?: string;
}

export interface myProfileCardProps {
  stats: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  user: User | null;
}
