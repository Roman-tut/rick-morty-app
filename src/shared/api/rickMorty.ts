import axios from 'axios';
import { ICharacter, ICharactersResponse } from '../../functions/characters/model/types';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const api = {
  async getCharacters(name?: string): Promise<ICharactersResponse> {
    try {
      const params = name ? { name } : {};
      const response = await axios.get<ICharactersResponse>(`${BASE_URL}/character`, {
        params,
      });
      return response.data;
    } catch (error) {
      console.error('Ошибка при загрузке персонажей:', error);
      throw error;
    }
  },

  async getCharacter(id: number): Promise<ICharacter> {
    try {
      const response = await axios.get<ICharacter>(`${BASE_URL}/character/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Ошибка при загрузке персонажа ${id}:`, error);
      throw error;
    }
  },
};
