import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { api } from '../../shared/api/rickMorty';
import { SearchInput } from '../../functions/filters/ui/SearchInput';
import { AppLoader } from '../../shared/api/ui/AppLoader';
import { ErrorMessage } from '../../shared/api/ui/ErrorMessage';
import { useParams } from 'react-router-dom';
import { FavoritesButton } from '../../functions/favorites/ui/FavoritesButton/index';
import { ICharacter } from '../../functions/characters/model/types';
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
  if (isError) return <ErrorMessage message="Failed to load character" />;

  return (
    <div className="page-container">
      <h1>{character?.name}</h1>
      <img src={character?.image} alt={character?.name} className={styles['character-image']} />
      <p>Status: {character?.status}</p>
      <FavoritesButton characterId={Number(id)} />
    </div>
  );
};
