import type { User } from 'types';
import { URL_GET } from '../../../assets';

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch(URL_GET.users);

    if (!response.ok) {
      throw new Error(`Error HTTP! Status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data?.data;
  } catch (error) {
    console.error("Couldn't get users:", error);
    throw error;
  }
};
