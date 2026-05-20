import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@w": path.resolve(__dirname, "./src/worker"),
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/react-app/assets"),
      "@components": path.resolve(__dirname, "./src/react-app/components"),
      "@style": path.resolve(__dirname, "./src/react-app/style"),
    },
  },
  plugins: [react(), tailwindcss(), cloudflare()],
});
