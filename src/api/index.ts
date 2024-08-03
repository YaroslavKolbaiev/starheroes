import axios from 'axios';
import { GetHerousResponse } from '../types';
// import data from '../test/mockData.json';

const BASE_URL = import.meta.env.VITE_API_URL;

export const getHeroes = async () => {
  try {
    const { data } = await axios.get<GetHerousResponse>(`${BASE_URL}/people/?page=1`);

    return data.results;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { error: error.response?.data.message };
    }

    return { error: 'Unknown error has ocured' };
  }
};
