import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],

// })

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Map "@components" to the actual path of your components directory
      "#root": __dirname,

      "#api" : path.resolve(__dirname, "src/api"),
      "#src" : path.resolve(__dirname, "src"),
      "#layouts": path.resolve(__dirname, "src/layouts"),
      "#pages": path.resolve(__dirname, "src/pages"),
    },
  },
  root: path.resolve(__dirname),
});
