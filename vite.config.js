import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [reactRefresh(), react()],
  base: '/React-Weather-App/', // Ensure this matches your repository name
  build: {
    outDir: 'build',
  },
});
