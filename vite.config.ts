import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    // Теперь это валидное свойство
    environment: 'jsdom',
    globals: true,
    coverage: {
      provider: 'v8', // или 'istanbul'
    },
  },
});
