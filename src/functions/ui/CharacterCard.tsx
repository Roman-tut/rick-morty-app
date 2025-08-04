import React from 'react';
import { ICharacter } from '../characters/model/types';
import { FavoritesButton } from '../favorites/ui/FavoritesButton/index';
import styles from '../../css/characters/CharacterCard.module.css';
import { CharacterCardProps } from '../characters/model/types';

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className={styles['character-card']}>
      <img src={character.image} alt={character.name} className={styles['character-image']} />
      <div className={styles['character-info']}>
        <h3 className="character-name">{character.name}</h3>
        <p className="character-status">
          Status:{' '}
          <span className={styles[`status-${character.status.toLocaleLowerCase()}`]}>
            {' '}
            {character.status}
          </span>
        </p>
        <FavoritesButton characterId={character.id} />
      </div>
    </div>
  );
};
