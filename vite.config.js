import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Custom plugin to handle SPA routing
const spaFallback = () => ({
  name: "spa-fallback",
  configureServer(server) {
    return () => {
      server.middlewares.use((req, res, next) => {
        if (
          req.method === "GET" &&
          !req.url.includes(".") &&
          req.url !== "/" &&
          !req.url.startsWith("/xpertiverse")
        ) {
          req.url = "/index.html";
        }
        next();
      });
    };
  },
});

export default defineConfig({
  base: "/xpertiverse/",
  plugins: [react(), tailwindcss(), spaFallback()],
});
