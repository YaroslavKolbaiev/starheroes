import { useState } from 'react';
import { Hero } from '../types';

export default function useFetchData(handler: () => Promise<any>) {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Hero[]>([]);

  const doRequest = async () => {
    setIsLoading(true);

    const responseData = await handler();

    if (responseData.error) {
      setError(responseData.error);
    } else {
      setData(responseData);
    }

    setIsLoading(false);
  };

  return {
    doRequest,
    error,
    isLoading,
    data,
  };
}
