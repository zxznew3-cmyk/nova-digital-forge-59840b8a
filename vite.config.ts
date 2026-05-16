import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import cloudflarePlugin from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [
    cloudflarePlugin(),
    TanStackRouterVite(),
    react(),
    tsconfigPaths(),
  ],
  server: {
    middlewareMode: true,
  },
});
