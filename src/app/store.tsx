import { configureStore } from '@reduxjs/toolkit';
import { favoritesReduser } from '../functions/favorites/ui/FavoritesButton/favoritesSlice';

export const store = configureStore({
  reducer: {
    favorites: favoritesReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
