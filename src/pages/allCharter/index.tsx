import { useQuery } from '@tanstack/react-query';
import { api } from '../../shared/api/apiRequestRickAndMorty';
import { CharacterCard } from '../../features/ui/CharacterCard';
import { AppLoader } from '../../shared/ui/AppLoader';
import styles from '../../css/characters/CharacterCard.module.css';
import { Link } from 'react-router-dom';
import { ICharactersResponse } from '../../shared/lib/interface/types';
import { ErrorMessage } from '../../shared/ui/ErrorMessage';
import { SearchInput } from '../../features/filters/ui/SearchInput';
import { useState } from 'react';

const CHARACTERS_QUERY_KEY = 'characters';

export const AllCharterPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const {
    data = { results: [] },
    isLoading,
    isError,
  } = useQuery<ICharactersResponse>({
    queryKey: [CHARACTERS_QUERY_KEY, searchQuery],
    queryFn: () => api.getCharacters(searchQuery),
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className={styles['container']}>
      <div className={styles['header']}>
        <h1 className={styles['characters-title']}>Персонажи Rick and Morty</h1>
        <div className={styles['search-container']}>
          <SearchInput onSearch={handleSearch} debounce={1000} />
        </div>
      </div>
      {isLoading && <AppLoader />}
      {isError && <ErrorMessage message="Не удалось загрузить персонажей" />}
      {!isLoading && !isError && data?.results.length === 0 && (
        <p>Персонажи не найдены. Попробуйте другой запрос.</p>
      )}
      {!isLoading && !isError && data?.results.length > 0 && (
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
      )}
    </div>
  );
};
