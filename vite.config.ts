import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 7100,
    proxy: {
      '/moonshot': {
        target: 'https://api.moonshot.cn',
        changeOrigin: true,
        secure: true,
        rewrite: (p) => p.replace(/^\/moonshot/, ''),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
