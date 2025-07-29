import { api } from '../../shared/api/rickMorty.ts';
import { useEffect, useState } from 'react';

export default function AllCharterPage() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCharacters() {
      try {
        const data = await api.getCharacters();
        console.log('API Response:', data);
        setCharacters(data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    loadCharacters();
  }, []);

  if (loading) return <div> А робот может сыграть симфонию ?</div>;
  return (
    <div>
      <h1>All Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
}
