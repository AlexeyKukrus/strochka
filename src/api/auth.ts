// src/api/auth.ts
import axios from 'axios';

const BASE_URL = 'http://localhost:80/wordpress/wp-json';

export const postLoginMethod = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/jwt-auth/v1/token`, {
      username: email,
      password,
    } ,
   );
    return response.data;
  } catch (error: any) {
    throw new Error('Auth Error', error);
  }
};

export const setRefreshTokenMethod = async () => {
  try {
    const response = await axios.post(
      `${BASE_URL}/jwt-auth/v1/token/refresh`,
      {},
      { withCredentials: true }
    );
    return response.data;
  } catch (error: any) {
    throw new Error('Refresh Token Error', error);
  }
};

export const createUserMethod = async (username: string, email: string, password: string) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/wp/v2/users`,
      {
        username,
        email,
        password,
        // Можно добавить другие поля, например, first_name, last_name
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer `,
        }
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error('Ошибка при создании пользователя', error);
  }
};