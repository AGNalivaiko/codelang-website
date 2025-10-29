import type { Question, ApiResponse } from './types';
import { URL_GET } from '../../assets';

export const fetchQuestions = async (): Promise<Question[]> => {
  try {
    const res = await fetch(URL_GET.questions);

    if (!res.ok) {
      throw new Error('Не удалось подключиться к серверу');
    }

    const data: ApiResponse = await res.json();
    return data.data.data;
  } catch (error) {
    console.error("Couldn't get questions:", error);
    throw error;
  }
};
