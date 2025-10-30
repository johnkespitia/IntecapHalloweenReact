import { defineConfig } from "cypress";
import vitePreprocessor from 'cypress-vite'

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173/IntecapHalloweenReact/",
    viewportWidth: 1280,
    viewportHeight: 720,
    retries: 1,
    setupNodeEvents(on, config) {
      on('file:preprocessor', vitePreprocessor({
        configFile: './vite.config.js',
        mode: 'development',
      }))
    },
  },
});
