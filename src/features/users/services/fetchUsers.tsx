import type { User, ApiResponse } from '../types';

const API_URL = 'https://codelang.vercel.app/api/users?limit=50';

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Error HTTP! Status: ${response.status}`);
    }

    const data: ApiResponse = await response.json();
    return data.data.data;
  } catch (error) {
    console.error("Couldn't get users:", error);
    throw error;
  }
};
