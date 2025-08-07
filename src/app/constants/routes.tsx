import React from 'react';
import { AllCharterPage } from '../../pages/allCharter';
import { CharactersPage } from '../../pages/oneCharacterOnPage';
import { FavoritesPage } from '../../pages/favorites';

interface RouteConfig {
  path: string;
  element: React.ReactNode;
  label?: string;
  isNav?: boolean;
}

export const ROUTES: RouteConfig[] = [
  {
    path: '/',
    element: <AllCharterPage />,
    label: 'Все персонажи',
    isNav: true,
  },
  {
    path: '/characters/:id',
    element: <CharactersPage />,
  },
  {
    path: '/favorites',
    element: <FavoritesPage />,
    label: 'Избранное',
    isNav: true,
  },
];
