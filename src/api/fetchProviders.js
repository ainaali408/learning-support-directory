import data from '../data/providers.json';

export const fetchProviders = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000); // 1 second delay
  });
};