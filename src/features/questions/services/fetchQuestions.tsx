import type { Question, ApiResponse } from '../types';

const API_URL = 'https://codelang.vercel.app/api/questions?limit=50';

export const fetchQuestions = async (): Promise<Question[]> => {
  try {
    const res = await fetch(API_URL);

    if (!res.ok) {
      throw new Error('jljksjdkf');
    }

    const data: ApiResponse = await res.json();
    return data.data.data;
  } catch (error) {
    console.error("Couldn't get questions:", error);
    throw error;
  }
};
