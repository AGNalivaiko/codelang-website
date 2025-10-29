interface Question {
  id: string;
  title: string;
  description: string;
  user: {
    id: string;
    username: string;
  };
  views?: number;
}

export interface QuestionCardProps {
  question: Question;
}
