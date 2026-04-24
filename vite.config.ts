import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({mode})=>{
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react(), tailwindcss()],
    server:{
      proxy:{
        '/api/chat': {
          target: env.VITE_OLLAMA_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/chat/, ''),
          headers: {
            'Authorization': `Bearer ${env.VITE_OLLAMA_API_KEY}`,
          }
        },
      },
    },
  }
});
