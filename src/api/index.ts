import {
  GetHerousResponse, Hero, GetFilmsResponse, GetStarshipsResponse,
} from '../types';
import { BASE_URL } from '../utils';
import { apiErrorHandler } from '../services/error-services';
import { httpClient } from '../http';

// getHeroes fetches a list of heroes from the API
export const getHeroes = async (page: string = '1') => {
  try {
    const { data } = await httpClient.get<GetHerousResponse>(`${BASE_URL}/people/?page=${page}`);
    return data;
  } catch (err: any) {
    return apiErrorHandler(err);
  }
};

// getHero fetches a hero by his ID together with the films and starships they appear in
// Promise.all is used to make the requests concurrently
export const getHero = async (id: string) => {
  try {
    const [hero, films, starships] = await Promise.all([
      httpClient.get<Hero>(`${BASE_URL}/people/${id}`),
      httpClient.get<GetFilmsResponse>(`${BASE_URL}/films/?characters=${id}`),
      httpClient.get<GetStarshipsResponse>(`${BASE_URL}/starships/?pilots=${id}`),
    ]);

    return {
      hero: hero.data,
      films: films.data,
      starships: starships.data,
    };
  } catch (err: any) {
    return apiErrorHandler(err);
  }
};
