import axios from 'axios';
const BASE_URL = 'https: //rickandmortyapi.com/api';

export const api = {
  async getCharacters(params?: string) {
    try {
      const response = await axios.get(`${BASE_URL}/character/${params ? `?${params}` : ''}`);

      return response.data;
    } catch (error) {
      console.error(`Ошикба по всем персонажам:`, error);
    }
  },
  async getCharacter(id: string) {
    try {
      const response = await axios.get(`${BASE_URL}/character/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Ошикба по персонажу ${id}:`, error);
    }
  },
};
