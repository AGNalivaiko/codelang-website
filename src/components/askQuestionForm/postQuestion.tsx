const API_URL = 'https://codelang.vercel.app/api/questions';

interface NewQuestion {
  title: string;
  description: string;
  code: string;
}

export const postQuestion = async (question: NewQuestion) => {
  const res = await fetch(API_URL, {
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
