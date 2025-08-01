import { Routes, Route, Link } from 'react-router-dom';
import { AllCharterPage } from '../pages/allCharter';
import { CharactersPage } from '../pages/mainCharacterApp';
import { FavoritesPage } from '../pages/favorites';

export default function App() {
  return (
    <div className="app-background">
      <nav>
        <Link to="/">Все персонажи</Link>
        <Link to="/favorites">Избранное</Link>
      </nav>

      <Routes>
        <Route path="/" element={<AllCharterPage />} />
        <Route path="/characters/:id" element={<CharactersPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}
