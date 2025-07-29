import React from 'react';
import { useState, useEffect } from 'react';

export const FavoritesButton = ({ characterId }: { characterId: number }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favoritesStr = localStorage.getItem('favorites') || '[]';
    const favorites: number[] = JSON.parse(favoritesStr);
    setIsFavorite(favorites.includes(characterId));
  }, [characterId]);

  const handleClick = () => {
    const favoritesStr = localStorage.getItem('favorites') || '[]';
    const favorites: number[] = JSON.parse(favoritesStr);

    const newFavorites = isFavorite
      ? favorites.filter((id) => id !== characterId)
      : [...favorites, characterId];

    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  return <button onClick={handleClick}>{isFavorite ? '★' : '☆'}</button>;
};
