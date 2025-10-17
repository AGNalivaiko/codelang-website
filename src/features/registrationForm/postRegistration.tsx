const URL_API = 'https://codelang.vercel.app/api/register';

interface NewUser {
  username: string;
  password: string;
}

export const postQuestion = async (question: NewUser) => {
  const res = await fetch(URL_API, {
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
