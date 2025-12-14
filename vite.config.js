import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

const plugins = [react()];

if (process.env.ANALYZE) {
  plugins.push(
    visualizer({
      filename: 'dist/bundle-stats.html',
      template: 'treemap',
      gzipSize: true,
      brotliSize: true,
    }),
  );
}

export default defineConfig({
  base: './',
  plugins,
  server: {
    port: 5173,
  },
});
