import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0",
    // 5173 bazen başka yazılımlarla (IPv6/localhost) çakışır; 5180 daha güvenilir
    port: 5180,
    strictPort: false,
    open: "/",
  },
  preview: {
    host: "0.0.0.0",
    port: 4173,
    strictPort: false,
    open: true,
  },
});
