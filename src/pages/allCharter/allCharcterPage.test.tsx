import { render, screen } from '@testing-library/react';
import { AllCharterPage } from './index';
import { describe, it, expect, vi } from 'vitest';
import { api } from '../../shared/api/apiRequestRickAndMorty';
import '@testing-library/jest-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const testQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

vi.mock('../../shared/api/apiRequestRickAndMorty', () => ({
  api: {
    getCharacters: vi.fn(() => Promise.resolve({ results: [] })),
  },
}));

describe('AllCharterPage', () => {
  it('рендерит заголовок', () => {
    render(
      <QueryClientProvider client={testQueryClient}>
        <AllCharterPage />
      </QueryClientProvider>,
    );

    expect(screen.getByText('Персонажи Rick and Morty')).toBeInTheDocument();
  });
});
