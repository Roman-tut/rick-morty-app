import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleFavorite } from './favoritesSlice';
import { RootState } from '../../../../app/store';

interface FavoritesButtonProps {
  characterId: number;
  withNavigation?: boolean;
}

export const FavoritesButton: React.FC<FavoritesButtonProps> = ({
  characterId,
  withNavigation = false,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector((state: RootState) => state.favorites);
  const isFavorite = favorites.includes(characterId);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(toggleFavorite(characterId));

    if (withNavigation) {
      setTimeout(() => {
        navigate('/favorites');
      }, 300);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`favorite-button ${isFavorite ? 'active' : ''}`}
      aria-label={isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}>
      {isFavorite ? '❤️' : '♡'}
    </button>
  );
};
