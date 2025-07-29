import React from 'react';
import { ICharacter } from '../characters/model/types';
import { ICharactersResponse } from '../characters/model/types';
import { FavoritesButton } from '../favorites/ui/FavoritesButton/index';

export const CharacterCard: React.FC<{ character: ICharacter }> = ({ character }) => {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} className="character-image" />
      <div className="character-info">
        <h3 className="character-name">{character.name}</h3>
        <p className="character-status">
          Status:{' '}
          <span className={`status-${character.status.toLocaleLowerCase()}`}>
            {' '}
            {character.status}
          </span>
        </p>
        <FavoritesButton characterId={character.id} />
      </div>
    </div>
  );
};
