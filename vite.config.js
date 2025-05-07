import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    open: true,
    allowedHosts: ["1ff1-175-157-13-183.ngrok-free.app"],
  },
  build: {
    outDir: "dist",
    minify: true,
  },
});
