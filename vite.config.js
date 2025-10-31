import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig(({mode}) => {
  const isProd = mode === 'production'
  return  {
    base: isProd == true ? '/IntecapHalloweenReact/' : '/',
    plugins: [
      react(),
      tailwindcss(),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.js',
      include: ['src/**/*.spec.{js,ts,jsx,tsx}'],
      transformMode: {
        // This forces files matching these regexes to be processed 
        // by the web transformation pipeline, which handles JSX.
        web: [/\.[jt]sx$/], 
      },
      coverage: {
        reporter: ['text', 'json', 'html'],
      },
    },
}})
