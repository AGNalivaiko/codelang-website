const URL_API = 'https://codelang.vercel.app/api/register';
import type { NewUser } from './types';

export const postQuestion = async (question: NewUser) => {
  const res = await fetch(URL_API, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      credentials: 'include'
    },
    body: JSON.stringify(question)
  });

  if (!res.ok) {
    throw new Error(`HTTP Error! Status: ${res.status}`);
  }

  return res.json();
};
