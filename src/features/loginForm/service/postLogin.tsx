import type { RegistredUser } from '../types';
import { URL_POST } from '../../../assets';

export const postLogin = async (registredUser: RegistredUser) => {
  const res = await fetch(URL_POST.login, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(registredUser)
  });

  if (!res.ok) {
    throw new Error(`HTTP Error! Status: ${res.status}`);
  }

  return res.json();
};
