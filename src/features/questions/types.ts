interface User {
  id: string;
  role: string;
  username: string;
}

export interface Question {
  answers: unknown[];
  attachedCode: string;
  description: string;
  id: string;
  isResolved: boolean;
  title: string;
  user: User;
}

export interface ApiResponse {
  data: {
    data: Question[];
  };
}
