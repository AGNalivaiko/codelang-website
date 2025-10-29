import { URL_POST } from '../../assets';

interface NewQuestion {
  title: string;
  description: string;
  code: string;
}

export const postQuestion = async (question: NewQuestion) => {
  const res = await fetch(URL_POST.question, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(question)
  });

  if (!res.ok) {
    throw new Error(`HTTP Error! Status: ${res.status}`);
  }

  return res.json();
};
