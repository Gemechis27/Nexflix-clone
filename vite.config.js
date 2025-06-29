import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',  // 👈 This tells Vite where the app will be served from
  plugins: [react()],
});

