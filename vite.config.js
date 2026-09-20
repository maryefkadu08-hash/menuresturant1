import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  base: "./",
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  preview: {
    host: "0.0.0.0",
    port: 4173,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false,
    assetsDir: "assets",
  },
});
