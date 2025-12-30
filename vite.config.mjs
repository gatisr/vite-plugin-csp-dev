import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      outputDir: 'dist/types',
      staticImport: true,
      insertTypesEntry: true,
      copyDtsFiles: true,
      rollupTypes: true,
      tsconfigPath: './tsconfig.json',
      exclude: [],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'vite-plugin-csp-dev',
      fileName: 'index',
      formats: ['es']
    },
    rollupOptions: {
      external: ['vite', 'node:crypto'],
      globals: {
        vite: 'vite',
      },
    }
  }
});