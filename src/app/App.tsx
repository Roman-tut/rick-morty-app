import AllCharterPage from '../pages/allCharter';
import { SearchInput } from '../functions/filters/ui/SearchInput';

export default function App() {
  const handleSearch = (query: string) => {
    console.log('Search query:', query);
  };

  return (
    <div>
      <SearchInput onSearch={handleSearch} />
      <AllCharterPage />
    </div>
  );
}
