import { createFetchClient } from 'utils/fetchClient'; // Assuming this utility exists or use built-in fetch

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const fetchClient = createFetchClient(API_BASE_URL);

export const fetchItems = () => {
  return fetchClient.get('/api/items').then(response => response.json());
};
