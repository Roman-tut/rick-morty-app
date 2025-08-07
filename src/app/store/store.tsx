//настравает реадкс сторе с помощью кофнигурстор, подключает редьюсер
// для управления состоянием избранного
//configureStore ф-ия из редакстолкит для создания хранилища
//favoritesReduser редьюсер который управляет состоянием изьранных персонажей

import { configureStore } from '@reduxjs/toolkit';
import { favoritesReduser } from '../../features/favorites/ui/FavoritesButton/favoritesSlice';

export const store = configureStore({
  reducer: {
    favorites: favoritesReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
