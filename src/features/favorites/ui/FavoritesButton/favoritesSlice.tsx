//файл управляет состоянием избранных персонажей с помощью редакстолкит
//создаем редьюсер (логику состояния) для работы с избранными персонажами

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const loadFromLocalStorage = (): number[] => {
  try {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
  } catch {
    return [];
  }
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: loadFromLocalStorage(),
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const index = state.indexOf(action.payload);
      if (index >= 0) {
        state.splice(index, 1);
      } else {
        state.push(action.payload);
      }
      localStorage.setItem('favorites', JSON.stringify(state));
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReduser = favoritesSlice.reducer;
