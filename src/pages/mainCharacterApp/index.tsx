import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { api } from '../../shared/api/rickMorty';
import { SearchInput } from '../../functions/filters/ui/SearchInput';
import { AppLoader } from '../../shared/api/ui/AppLoader';
import { ErrorMessage } from '../../shared/api/ui/ErrorMessage';

export const CharactersPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { data, isLoading, isError } = useQuery({
    queryKey: ['characters', searchQuery],
    queryFn: () => api.getCharacters(searchQuery).then((res) => res.data),
  });

  if (isLoading) return <AppLoader />;
  if (isError) return <ErrorMessage message="Failed to load characters" />;

  return (
    <div className="page-container">
      <SearchInput onSearch={setSearchQuery} />
      {data?.results?.map((character) => (
        <div key={character.id}>{character.name}</div>
      ))}
    </div>
  );
};
