import {
  describe,
  expect,
  it,
  vi,
} from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useState } from 'react';
import useFetchData from './useFetchData';
import { GetHerousResponse, Hero } from '../types';

describe('useFetchData hook', () => {
  it('should return correct data', async () => {
    const mockHandler = vi.fn(
      () => Promise.resolve({
        count: 82,
        next: 'https://sw-api.starnavi.io/api/people/?page=3',
        previous: 'https://sw-api.starnavi.io/api/people/?page=1',
        results: [{ id: 1, name: 'Luke Skywalker' }],
      }),
    );

    const { result } = renderHook(() => {
      const [heroes, setHeroes] = useState<Hero[]>([]);
      const { doRequest, error, isLoading } = useFetchData<GetHerousResponse>({
        handler: mockHandler,
        onSuccess: ({ results }) => {
          setHeroes([...results]);
        },
      });
      return {
        doRequest, heroes, error, isLoading,
      };
    });

    result.current.doRequest();

    await waitFor(() => {
      expect(result.current.heroes).toEqual([{ id: 1, name: 'Luke Skywalker' }]);
    });
  });

  it('should handle error if promise resolves with error', async () => {
    const mockHandler = vi.fn(
      () => Promise.resolve({
        error: 'Something went wrong',
      }),
    );

    const { result } = renderHook(() => {
      const { doRequest, error, isLoading } = useFetchData<GetHerousResponse>({
        handler: mockHandler,
      });
      return { doRequest, error, isLoading };
    });

    result.current.doRequest();

    await waitFor(() => {
      expect(result.current.error).toBe('Something went wrong');
      expect(result.current.isLoading).toBe(false);
    });
  });

  it('should handle loading state', async () => {
    const mockHandler = vi.fn(
      () => new Promise(() => {}),
    );

    const { result } = renderHook(() => {
      const { doRequest, isLoading } = useFetchData<GetHerousResponse>({
        handler: mockHandler,
      });
      return { doRequest, isLoading };
    });

    result.current.doRequest();

    await waitFor(() => {
      expect(result.current.isLoading).toBe(true);
    });
  });
});
