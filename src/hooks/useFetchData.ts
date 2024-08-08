import { useState } from 'react';

type FetchData<T> = {
  handler: (param?: string) => Promise<any>;
  onSuccess?: (data: T) => void;
};

// custom hook to fetch data
// handler is a function that fetches the data
// onSuccess is an optional function to handle the data after fetching
export default function useFetchData<T>({ handler, onSuccess }: FetchData<T>) {
  // error state to store the error message and loading state to show a loading spinner
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // function to fetch the data
  const doRequest = async (param?: string) => {
    setIsLoading(true);

    const responseData = await handler(param);

    if (responseData.error) {
      setError(responseData.error);
      setIsLoading(false);
      return;
    }

    if (onSuccess && !responseData.error) {
      onSuccess(responseData);
    }

    setIsLoading(false);
  };

  return {
    doRequest,
    error,
    isLoading,
  };
}
