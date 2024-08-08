export const BASE_URL = 'https://sw-api.starnavi.io';

export const wait = (ms: number) => new Promise((resolve) => { setTimeout(resolve, ms); });

export const animationDelay = () => Math.random() * 0.7 + 0.1;
