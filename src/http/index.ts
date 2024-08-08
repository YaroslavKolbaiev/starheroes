import axios from 'axios';
import {
  getCache, FROM_CACHE, casheIsExpired,
} from '../services/cache-services';
import { BASE_URL } from '../utils';
import { CacheData } from '../types';

// Create an axios instance with a base URL
export const httpClient = axios.create({
  baseURL: BASE_URL,
});

// Add a request interceptor to the axios instance
httpClient.interceptors.request.use(async (config) => {
  // If the request URL is not defined, return the config as it is
  if (!config.url) {
    return config;
  }

  // Get the cache object. Function getCache returns cache instance
  const cache = await getCache();

  // Try to match the request URL in the cache
  const cachedResponse = await cache.match(config.url);

  // If a cached response is found extract the timestamp and data from the cached response
  // and check if the cached data is expired
  if (cachedResponse) {
    const { timestamp, data }: CacheData = await cachedResponse.json();

    const isExpired = casheIsExpired(timestamp);

    // If the cached data is not expired return a modified config with the cached data
    if (!isExpired) {
      return {
        ...config,
        data,
        adapter: () => Promise.resolve({
          data, status: 200, statusText: FROM_CACHE, headers: {}, config,
        }),
      };
    }

    // If the cached data is expired delete the cache
    await cache.delete(config.url);
  }

  // Return the original config if no valid cache is found
  return config;
});

// Add a response interceptor to the axios instance
httpClient.interceptors.response.use(
  async (response) => {
    // Check if the response is from the cache
    const fromCache = response.statusText === FROM_CACHE;

    // check if response is not from the cache and the URL is defined
    if (!fromCache && response.config.url) {
      // if condition is true prepare the data to be cached with the current timestamp
      const dataToCache: CacheData = {
        data: response.data,
        timestamp: Date.now(),
      };

      // Get the cache object. Function getCache returns cache instance
      const cache = await getCache();

      // Put the response data into the cache
      cache.put(response.config.url, new Response(JSON.stringify(dataToCache)));
    }

    // Return the response as is
    return response;
  },
  // Handle errors by rejecting the promise with the error response data
  (error) => Promise.reject(error.response?.data),
);
