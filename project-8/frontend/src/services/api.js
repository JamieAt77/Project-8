import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000';

const fetchItems = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/items`);
    return response.data.items;
  } catch (error) {
    console.error('Failed to fetch items:', error);
    throw error;
  }
};

export { fetchItems };
