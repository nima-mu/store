import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import foldersObject from "./src/constants/paths"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      ...foldersObject
    },
  },
});
