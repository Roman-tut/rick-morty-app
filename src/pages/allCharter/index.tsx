import { useQuery } from '@tanstack/react-query';
import { api } from '../../shared/api/rickMorty';
import { CharacterCard } from '../../functions/ui/CharacterCard';
import { AppLoader } from '../../shared/api/ui/AppLoader';
import styles from '../../css/characters/CharacterCard.module.css';

export const AllCharterPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['characters'],
    queryFn: async () => {
      try {
        const response = await api.getCharacters();
        return response?.results || [];
      } catch (err) {
        throw new Error('Failed to fetch characters');
      }
    },
  });

  if (isLoading) return <AppLoader />;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No characters found</div>;

  return (
    <div className={styles['characters-container']}>
      {data.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};
