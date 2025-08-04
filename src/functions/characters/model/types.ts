export interface ICharacter {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ICharactersResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: ICharacter[];
}

export interface FavoritesButtonProps {
  characterId: number;
  withNavigation?: boolean;
}
export interface CharacterCardProps {
  character: ICharacter;
}

export interface ErrorMessageProps {
  message: string;
  className?: string;
}

export interface SearchInputProps {
  onSearch: (query: string) => void;
  debounce?: number;
  placeholder?: string;
}
