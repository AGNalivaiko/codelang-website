import { URL_POST } from '../../assets';
import type { NewUser } from './types';

export const postQuestion = async (question: NewUser) => {
  const res = await fetch(URL_POST.registration, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(question)
  });

  if (!res.ok) {
    throw new Error(`HTTP Error! Status: ${res.status}`);
  }

  return res.json();
};
