import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@assets": path.resolve(__dirname, "./src/assets/"),
      "@components": path.resolve(__dirname, "./src/components/"),
      "@hooks": path.resolve(__dirname, "./src/hooks/"),
      "@styles": path.resolve(__dirname, "./src/styles/"),
      "@type": path.resolve(__dirname, "./src/types/"),
      "@pages": path.resolve(__dirname, "./src/pages/"),
    },
  },
  plugins: [react()],
})
