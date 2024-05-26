import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [reactRefresh()],
  base: '/React-Weather-App/', // Ensure this matches your repository name
  build: {
    outDir: 'build',
  },
});
