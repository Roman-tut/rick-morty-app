import { useQuery } from '@tanstack/react-query';
import { api } from '../../shared/api/rickMorty';
import { CharacterCard } from '../../functions/ui/CharacterCard';
import { AppLoader } from '../../shared/api/ui/AppLoader';
import styles from '../../css/characters/CharacterCard.module.css';
import { Link } from 'react-router-dom';
import { ICharactersResponse } from '../../functions/characters/model/types';
import { ErrorMessage } from '../../shared/api/ui/ErrorMessage';
import { SearchInput } from '../../functions/filters/ui/SearchInput';
import { useState } from 'react';

export const AllCharterPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { data, isLoading, isError } = useQuery<ICharactersResponse>({
    queryKey: ['characters', searchQuery],
    queryFn: () => api.getCharacters(searchQuery),
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  if (isLoading) return <AppLoader />;
  if (isError) return <ErrorMessage message="Не удалось загрузить персонажей" />;

  return (
    <div className={styles['container']}>
      <div className={styles['header']}>
        <h1 className={styles['characters-title']}>Персонажи Rick and Morty</h1>
        <div className={styles['search-container']}>
          <SearchInput onSearch={handleSearch} debounce={1000} />
        </div>
        <div className={styles['characters-container']}>
          {data?.results.map((character) => (
            <Link
              key={character.id}
              to={`/characters/${character.id}`}
              className={styles['character-link']}>
              <CharacterCard character={character} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
