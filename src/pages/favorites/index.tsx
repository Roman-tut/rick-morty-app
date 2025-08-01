import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { CharacterCard } from '../../functions/ui/CharacterCard';
import { useQuery } from '@tanstack/react-query';
import { api } from '../../shared/api/rickMorty';
import { ICharacter } from '../../functions/characters/model/types';
import { AppLoader } from '../../shared/api/ui/AppLoader';

export const FavoritesPage = () => {
  const favoriteIds = useSelector((state: RootState) => state.favorites);

  const { data: allCharacters, isLoading } = useQuery<ICharacter[]>({
    queryKey: ['all-characters'],
    queryFn: () => api.getCharacters().then((response) => response.results),
  });

  const favorites = allCharacters?.filter((character) => favoriteIds.includes(character.id)) || [];

  if (isLoading) return <AppLoader />;

  return (
    <div className="favorites-page">
      <h1>Избранные персонажи</h1>

      {favorites.length === 0 ? (
        <p>Вы пока не добавили ни одного персонажа в избранное</p>
      ) : (
        <div className="characters-grid">
          {favorites.map((character) => (
            <div key={character.id} className="character-card-wrapper">
              <CharacterCard character={character} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
