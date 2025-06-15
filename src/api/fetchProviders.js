// Simulates an API call by loading local JSON data with a delay

import data from '../data/providers.json';

export const fetchProviders = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000); // 1 second delay
  });
};
