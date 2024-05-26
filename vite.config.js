import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [reactRefresh()],
  base: 'React-Weather-App', // Set your GitHub Pages repository name here
  build: {
    outDir: 'build', // Specify the output directory for build
  },
});
