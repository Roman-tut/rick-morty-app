import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { api } from '../../shared/api/apiRequestRickAndMorty';
import { SearchInput } from '../../features/filters/ui/SearchInput';
import { AppLoader } from '../../shared/ui/AppLoader';
import { ErrorMessage } from '../../shared/ui/ErrorMessage';
import { useParams } from 'react-router-dom';
import { FavoritesButton } from '../../features/favorites/ui/FavoritesButton/index';
import { ICharacter } from '../../shared/lib/interface/types';
import styles from '../../css/characters/CharacterCard.module.css';

export const CharactersPage = () => {
  const { id } = useParams<{ id: string }>();
  const characterId = id ? parseInt(id) : 0;

  const {
    data: character,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['character', characterId],
    queryFn: () => api.getCharacter(Number(id)),
  });

  if (isLoading) return <AppLoader />;
  if (isError) return <ErrorMessage message="Не удалось загрузить персонажа" />;

  return (
    <div className={styles['container']}>
      <div className="page-container">
        <h1>{character?.name}</h1>
        <img src={character?.image} alt={character?.name} className={styles['character-image']} />
        <p>Status: {character?.status}</p>
        <p>Gender: {character?.gender}</p>
        <p>Species: {character?.species}</p>
        <p>Location: {character?.location?.name || 'Unknown'}</p>

        <FavoritesButton characterId={Number(id)} />
      </div>
    </div>
  );
};
