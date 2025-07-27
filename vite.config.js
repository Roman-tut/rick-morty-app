import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      fastRefresh: true, // Убедитесь, что это включено
    }),
  ],
  server: {
    watch: {
      usePolling: true, // Для некоторых файловых систем (Docker/WSL2)
    },
  },
});
