export const patchUsername = async (newUsername: string) => {
  const res = await fetch('https://codelang.vercel.app/api/me', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username: newUsername })
  });

  if (!res.ok) {
    throw new Error('Не удалось изменить имя ');
  }
  return res.json();
};
