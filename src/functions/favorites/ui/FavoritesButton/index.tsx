import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../FavoritesButton/favoritesSlice';
import { RootState } from '../../../../app/store';

interface FavoritesButtonProps {
  characterId: number;
}

export const FavoritesButton: React.FC<FavoritesButtonProps> = ({ characterId }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites);
  const isFavorite = favorites.includes(characterId);

  const handleClick = () => {
    dispatch(toggleFavorite(characterId));
  };

  return (
    <button
      onClick={handleClick}
      className={`favorite-button ${isFavorite ? 'active' : ''}`}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}>
      {isFavorite ? '❤️' : '🤍'}
    </button>
  );
};
