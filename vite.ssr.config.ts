import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

/** Builds the app for Node so prerender.js can render it to static HTML. */
export default defineConfig({
  plugins: [react()],
  build: {
    ssr: "src/ssr-entry.ts",
    outDir: "dist-ssr",
    emptyOutDir: true,
    rollupOptions: { output: { entryFileNames: "App.js" } },
  },
});
