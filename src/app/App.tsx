// оперделяет струкуру приложения( ма
import { Routes, Route, Link } from 'react-router-dom';
import { ROUTES } from '../app/constants/routes';

export default function App() {
  return (
    <div className="app-background">
      <nav>
        {ROUTES.filter((route) => route.isNav).map((route) => (
          <Link key={route.path} to={route.path}>
            {route.label}
          </Link>
        ))}
      </nav>

      <Routes>
        {ROUTES.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}
