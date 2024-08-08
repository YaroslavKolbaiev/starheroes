export const FROM_CACHE = 'fromCache';

export const getCache = async () => {
  const cache = await caches.open('heroes-cache-v1');
  return cache;
};

export const casheIsExpired = (timestamp: number) => {
  const CACHE_EXPIRATION_MS = 480 * 60 * 1000; // 8 hours
  const currentTime = Date.now();

  return currentTime - timestamp > CACHE_EXPIRATION_MS;
};
