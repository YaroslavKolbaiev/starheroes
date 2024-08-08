import {
  describe,
  expect, it, Mock, vi,
} from 'vitest';
import { httpClient } from '../http';
import { getHeroes, getHero } from './index';
import { GetHerousResponse } from '../types';
import { BASE_URL } from '../utils';

vi.mock('../http', () => ({
  httpClient: {
    get: vi.fn(),
  },
}));

describe('getHeroes API', () => {
  it('should return data if request is succesfull', async () => {
    const data = {
      cout: 2, next: null, previous: null, results: [{ id: 1 }, { id: 2 }],
    };

    (httpClient.get as Mock).mockResolvedValue({
      data,
    });

    const { results } = await getHeroes() as GetHerousResponse;

    expect(results).toEqual(data.results);
  });

  it('should return error object if error has been thrown', async () => {
    const error = new Error('Network Error');

    (httpClient.get as Mock).mockRejectedValue(error);

    const result = await getHeroes();

    expect(result).toEqual({ error: 'Network Error' });
  });

  it('should call getHeroes with correct url if parameter not passed', async () => {
    (httpClient.get as Mock).mockResolvedValue({
      data: {
        results: [],
      },
    });

    await getHeroes();

    expect(httpClient.get).toHaveBeenCalledWith(`${BASE_URL}/people/?page=1`);
  });

  it('should call getHeroes with correct url if parameter passed', async () => {
    (httpClient.get as Mock).mockResolvedValue({
      data: {
        results: [],
      },
    });

    await getHeroes('2');

    expect(httpClient.get).toHaveBeenCalledWith(`${BASE_URL}/people/?page=2`);
  });
});

describe('getHero API', () => {
  it('should return data if request is successful', async () => {
    const heroData = {
      id: 1, name: 'Luke Skywalker', height: '172', mass: '77', hair_color: 'blond',
    };

    const filmsData = {
      results: [
        { title: 'A New Hope', episode_id: 4 },
        { title: 'The Empire Strikes Back', episode_id: 5 },
      ],
    };

    const starshipsData = {
      results: [
        { name: 'X-wing', model: 'T-65 X-wing' },
        { name: 'Imperial shuttle', model: 'Lambda-class T-4a shuttle' },
      ],
    };

    (httpClient.get as Mock)
      .mockResolvedValueOnce({ data: heroData })
      .mockResolvedValueOnce({ data: filmsData })
      .mockResolvedValueOnce({ data: starshipsData });

    const result = await getHero('1');

    expect(result).toEqual({
      hero: heroData,
      films: filmsData,
      starships: starshipsData,
    });
  });

  it('should return error object if error has been thrown', async () => {
    const error = new Error('Network Error');

    (httpClient.get as Mock).mockRejectedValue(error);

    const result = await getHero('1');

    expect(result).toEqual({ error: 'Network Error' });
  });

  it('should call getHero with correct url', async () => {
    (httpClient.get as Mock).mockResolvedValue({
      data: {},
    });

    await getHero('1');

    expect(httpClient.get).toHaveBeenCalledWith(`${BASE_URL}/people/1`);
  });
});
